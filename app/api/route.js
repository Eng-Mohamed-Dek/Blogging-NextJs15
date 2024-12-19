import { NextResponse } from "next/server";
import { connectDB } from "../lib/config/db";
import { writeFile } from 'fs/promises'
import BlogModel from "../lib/model/BlogModel";
const fs = require("fs");

// Async function for connecting database. 
const LoadDB =  async () => {
    await connectDB()
} 

LoadDB()

// API EndPoint to get Blogs 
export async function GET(request) {
    // get one blog 
    let blogId = request.nextUrl.searchParams.get("id")
    if (blogId) {
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json(blog)
    }

    // get all blogs 
    const blogs = await BlogModel.find({})
    return NextResponse.json({ Blogs: blogs })
}


// create Blogs 
export async function POST(request) {
    // make formData to collect data from the inputs     
    const formData = await request.formData()
    const timestamp = Date.now()

    // image upload in Next js 
    const image = formData.get('image')
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path, buffer)
    const imageURL = `/${timestamp}_${image.name}`
    // console.log(imageURL)

    const BlogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        image: `${imageURL}`,
        authorImg: `${formData.get('authorImg')}`,
        author: `${formData.get('author')}`,
    }

    await BlogModel.create(BlogData)

    return NextResponse.json({success: true, message: "Blog Saved Successfully"})
}

// Delete Blog 
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id')
    const blog = await BlogModel.findById(id)
    fs.unlink(`./public${blog.image}`, () => { })
    await BlogModel.findByIdAndDelete(blog)
    return NextResponse.json({message: "Blog deleted successfully"})
}

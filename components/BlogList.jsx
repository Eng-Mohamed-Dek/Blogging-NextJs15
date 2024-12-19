'use client'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
    const [menu, setMenu] = useState("All Blogs") 
  const [blogs, setBlogs] = useState([]) 
  
  const getBlogs = async () => {
    const response = await axios.get('/api')
    setBlogs(response.data.Blogs)
  }

  // console.log("blogs are here" , blogs)
  useEffect(() => {
    getBlogs()
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
          <button onClick={() => setMenu("All Blogs")} className={menu == 'All Blogs' ? `bg-black text-white py-2 px-4 rounded` : ''}>All Blogs</button>
          <button onClick={() => setMenu("Technology")} className={menu == 'Technology' ? `bg-black text-white py-2 px-4 rounded` : ''}>Technology</button>
          <button onClick={() => setMenu("Startup")} className={menu == 'Startup' ? `bg-black text-white py-2 px-4 rounded` : ''}>Startup</button>
          <button onClick={() => setMenu("LifeStyle")} className={menu == 'LifeStyle' ? `bg-black text-white py-2 px-4 rounded` : ''}>Lifestyle</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 w-9/12 mb-16 mt-20 mx-auto">
          {blogs.filter((item) => menu === "All Blogs" ? true : item.category === menu).map((item, index) => {
            return <BlogItem id={item._id} key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
          })}
      </div>
    </div>
  )
}

export default BlogList
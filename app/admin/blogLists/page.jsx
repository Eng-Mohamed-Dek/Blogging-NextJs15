"use client";
import BlogTableItem from "@/components/Admin/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  // get all blogs
  const getBlogs = async () => {
    const response = await axios.get("/api");
    setBlogs(response.data.Blogs);
  };

  // console.log("blogs are here" , blogs)
  useEffect(() => {
    getBlogs();
  }, []);

  // console.log("All Blogs are here" , blogs)

  // delete a blog
  const deleteBlog = async (mongId) => {
    const response = await axios.delete("/api", {
      params: {
        id: mongId,
      },
    })
    getBlogs()
  };

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-3xl font-bold">All Blogs</h1>
      <div className="relative h-[80vh] max-w-[950px] overflow-x-auto mt-5 border border-black">
        <table className="w-full text-sm text-gray-500">
          <tr className="text-sm text-gray-700 text-left uppercase bg-gray-100">
            <th scope="col" className="px-6 py-3">
              Author Name
            </th>
            <th scope="col" className="px-6 py-3">
              Blog Title
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </table>
        <tbody className="w-full">
          {blogs.map((item, index) => {
            return (
              <BlogTableItem
                key={index}
                author={item.author}
                title={item.title}
                date={item.date}
                deleteBlog={deleteBlog}
                mongId={item._id}
              />
            );
            // console.log("Single Blog" , item.title)
          })}
        </tbody>
      </div>
    </div>
  );
};

export default page;

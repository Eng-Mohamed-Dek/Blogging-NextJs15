'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  // get image upload  
  const [image, setImage] = useState(null)

  // get the value 
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennet",
    authorImg: "/author_img.png",
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data)
  }

  //submit data to the backend 
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title' , data.title)
    formData.append('description', data.description)
    formData.append('author' , data.author)
    formData.append('category' , data.category)
    formData.append('authorImg', data.authorImg)
    formData.append('image', image)

    const response = await axios.post('/api', formData)
    if (response.data.success) {
      alert("Blog Added Successfully")
      setImage(null)
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennet",
        authorImg: "/author_img.png",
      })
    } else {
      alert("Error uploading")
    }
  }

  return (
    <div>
      <form action="" className="pt-5 px-5 sm:pt-12 sm:pl-16" onSubmit={onSubmitHandler}>
        {/* image uploading */} 
        <p className="text-2xl mb-4 font-semibold">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image className='border border-black rounded p-1 cursor-pointer' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='upload' width={200} height={70} />
        </label>
        <input type="file" name='image' id='image' hidden required onChange={(e) => setImage(e.target.files[0])}/>
        {/*blog infos */}
        <p className='text-2xl mt-4 font-semibold'>Blog Title</p>
        <input type="text" placeholder='Blog Title ' required className='sm:w-[500px] mt-4 px-4 py-3 border'
         name='title'  onChange={onChangeHandler} value={data.title}
        />
        <p className='text-2xl mt-4 font-semibold'>Blog Description</p>
        <textarea type="text" placeholder='Blog Description' required className='sm:w-[500px] mt-4 px-4 py-5 border'
          name='description'  onChange={onChangeHandler} value={data.description}
        ></textarea>
        <p className='text-2xl mt-4 font-semibold'>Blog Category</p>
        <select name="category" className='w-40 mt-4 px-4 py-3 border text-gray' value={data.category} onChange={onChangeHandler}>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="LifeStyle">LifeStyle</option>
        </select>

        <br />

        <button type='submit' className="mt-8 w-40 h-12 bg-black text-white cursor-pointer">Add Blog</button>
     </form>
    </div>
  )
}

export default page
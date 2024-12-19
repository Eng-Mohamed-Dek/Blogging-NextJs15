import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({image, title, description , category, id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black'>
          <Link href={`/blogs/${id}`}>
            <Image src={image} alt="blog image" width={400} height={400} className='border-b border-black'/>
          </Link>
          <p className="ml-5 rounded mt-5 px-4 py-2 mb-5 inline-block bg-black text-white text-sm">
            {category}
          </p>
      <div className='p-5'>
      <Link href={`/blogs/${id}`}>
          <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900 cursor-pointer hover:text-blue-600'>{title}</h5>
      </Link>
        <p className='mb-2 text-sm tracking-tight text-gray-700'
        dangerouslySetInnerHTML={{ __html:description.slice(0, 120)}}></p>
          <div className='inline-flex items-center py-2 font-semibold text-center cursor-pointer hover:scale-105'>
        
            Read <Image src={assets.arrow} className='ml-2 ' width={12} alt="" />
          </div>
      </div>
    </div>
  )
}

export default BlogItem
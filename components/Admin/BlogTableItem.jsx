
import React from 'react'

const BlogTableItem = ({ author, title, date, deleteBlog,  mongId }) => {
    const blogDate = new Date(date)
  return (
      <tr className='bg-white border-b'>
          <td scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
              <p className='font-bold'>{author ? author : "No Author" }</p>  
          </td>
          <td className='px-6 py-4'>
             {title ? title : "No Title"}
          </td>
          <td className='px-6 py-4'>
             {blogDate.toDateString() }
          </td>
          <td className='px-6 py-4 cursor-pointer' onClick={() => deleteBlog(mongId)}>
              X
          </td>
     </tr>
  )
}

export default BlogTableItem
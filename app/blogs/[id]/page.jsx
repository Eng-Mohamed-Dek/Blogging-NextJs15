'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = ({ params }) => {
    const [data, setData] = useState("")

    
    const fetchBlogData = async () => {
        const response = await axios.get('/api', {
            params: {
                id: params.id,
            }
        })
        setData(response.data)
    }
    
    useEffect(() => {
        fetchBlogData()
    }, [])
    
    console.log(data)
    return (
        (data ?
    <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className="flex justify-between items-center">
            <Link href="/">
                <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto" />
            </Link>
            <button className=" flex items-center gap-2 font-medium py-2 px-3 sm:py-3 sm:px-6 border-solid border-black border-2 hover:shadow-[-4px_4px_3px_#000000] transition-all duration-300">Get Started <Image src={assets.arrow} width={20} alt="" /></button>
        </div>
        <div className='text-center m-24'>
            <h1 className="text-2xl sm:text-5xl leading-10 font-semibold max-w-[700px] mx-auto">
            {data.title}
            </h1>
            <Image src={data.authorImg} width={100} alt="" className='rounded-full mx-auto mt-6 border-2 border-white' />
            <p className='mt-2 pb-3 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
   </div> 
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
                    <Image src={data.image} width={1280} height={720} alt="" className='border-4 border-white' />
                    {/* <h1 className="my-5 font-semibold text-[18px]">Introduction</h1>    */}
                    <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>  
                    {/* <h3 className="my-5 font-semibold text-[18px]">Step 1: Self Steam Building</h3>   
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
                    <h3 className="my-5 font-semibold text-[18px]">Step 2: Earning More Money Every Night</h3>   
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
                    <h3 className="my-5 font-semibold text-[18px]">Step 3: Working for your self is the best to do</h3>   
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
                    <h3 className="my-5 font-semibold text-[18px]">Conclusion</h3>   
                    <p className='my-3'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p> */}

                    {/* social media icons  */}
                    <div className="text-black font font-semibold my-4 mt-20">Share this Article</div>
                    <div className="flex">
                        <Image src={assets.facebook_icon} width={50} alt='facebook' />
                        <Image src={assets.twitter_icon} width={50} alt='twitter_icon' />
                        <Image src={assets.googleplus_icon} width={50} alt='google plus' />
                    </div>
                </div>       
    <Footer />            
  </>       
  : <></>)
  
  )
}

export default Blog
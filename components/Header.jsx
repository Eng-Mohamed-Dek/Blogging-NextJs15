import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
      <div className='py-5 px-5 md:py-10 lg:px-20'>
        <div className='flex justify-between items-center'>
              <Image src={assets.logo} w={180} className='w-[130px] sm:w-auto' alt='' />
              <button className=" flex items-center gap-4 font-medium py-2 px-3 sm:py-3 sm:px-6 border-solid border-black border-2 hover:shadow-[-4px_4px_3px_#000000] transition-all duration-300">Get Started <Image src={assets.arrow} width={20} alt="" /></button>
      </div>
      
          {/* hero sections */}
          <div className='text-center my-32'>
            <h1 className='text-3xl sm:text-7xl font-bold'>Read Latest Blogs</h1>
              <p className='mt-10 max-w-[840px] leading-[29px] font-sans m-auto text-xs sm:text-base'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.</p>
              <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-black border-2 rounded'>
                  <input type="text" value="" placeholder='Enter Your Email' className='pl-4 outline-none'/>
                  <button className="py-4 px-4 sm:px-8 border-solid border-black border-l-2 bg-black text-white font-bold">SUBSCRIBE NOW </button>
              </form>
          </div>
    </div>
  )
}

export default Header
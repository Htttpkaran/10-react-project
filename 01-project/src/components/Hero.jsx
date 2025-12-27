import React from 'react'
import flipkart from '../assets/flipkart.png'
import amazon  from '../assets/amazon.png'
import heroImg from '../assets/shoe_image.png'


const Hero = () => {
  return (
    <div className='flex justify-around items-center h-[90vh] '  >
      <div className="leftSide">
        <h1 className='text-7xl font-extrabold mb-10'>YOUR FEET <br /> DESERVE <br /> THE BEST</h1> 
        <p className='text-gray-500 text-lg font-medium'>Experience unmatched comfort and <br /> style with our premium footwear collection.</p>
        <div className='flex gap-8 mt-4 mb-6'>
            <button className='bg-[#D01C28] text-white px-4 py-1 cursor-pointer'>Shop Now </button>
            <button className='px-4 py-1 border-2 border-gray-500 cursor-pointer '> Category</button>
        </div>
        <p className='text-gray-400'>Also Available On</p>
        <div className='flex gap-6 mt-5'>
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
        </div>
      </div>
      <div className="rightSide">
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero

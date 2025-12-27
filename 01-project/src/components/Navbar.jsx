import React from 'react'
import img from '../assets/brand_logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4  '>
        <div>
            <img src={img} alt="Brand Logo" />
        </div>
        <div className='flex gap-8 font-semibold'>
             <ul className='hover:underline cursor-pointer '>MENU</ul>
             <ul className='hover:underline cursor-pointer '>LOCATION</ul>
             <ul className='hover:underline cursor-pointer '>ABOUT</ul>
             <ul className='hover:underline cursor-pointer '>CONTACT</ul>
             
        </div>
        <div>
            <button className='bg-[#D01C28] text-white px-4 py-1 cursor-pointer '>Login</button>
        </div>
      
      
    </div>
  )
}

export default Navbar

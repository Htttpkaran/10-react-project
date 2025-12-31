import React from 'react'
import logo from '../images/Frame.png'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center p-4 h-[10%]'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex gap-4 px-4'>
        <a href="" className='uppercase font-semibold'>home</a>
        <a href="" className='uppercase font-semibold'>about</a>
        <a href="" className='uppercase font-semibold'>contact</a>
      </div>
    </div>
  )
}

export default Navbar

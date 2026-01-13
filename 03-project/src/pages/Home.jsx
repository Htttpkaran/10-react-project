import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../image/home/dices 1.png'

const Home = () => {
  const navigate = useNavigate()

  

  return (
    <>
      <div className=' h-screen w-full flex items-center justify-center'>
        <div className='  '>
            <img src={img} alt="" />
        </div>
        <div className='  flex flex-col items-center justify-center'>
            <h1 className='text-8xl font-bold'>DICE GAME</h1> 
            <div className=' w-full flex justify-end mt-5'>
              <button 
              onClick={() => navigate('/game')} 
              className=' bg-black text-white px-15 py-2 rounded-lg active:scale-95 cursor-pointer '
              >Play Now</button>
              
            </div>
        </div>
      </div>
    </>
  )
}

export default Home

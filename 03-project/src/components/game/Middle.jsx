import React, { useContext, useState } from 'react'
import RoleDice from './RoleDice'
import GameRule from './GameRule'
import { GameContext } from '../../context/GameContext'

const Middle = () => {
  const { setScore, setSelectedNumber } = useContext(GameContext)
  const [show, setShow] = useState(false)

  const handleReset = () => {
    setScore(0)
    setSelectedNumber(null)
  }

  return (
    <div className=' w-full h-[80%] flex flex-col justify-center items-center gap-10 '>
      <div className='flex flex-col justify-center items-center gap-2 ' >
          <RoleDice />
        <h3 className='font-medium text-2xl'>Click on Dice to roll</h3>
      </div>
      <div className='flex flex-col gap-4  w-50 '>
        <button className='border px-5 py-2 ' onClick={handleReset}>Reset Score</button>
        <button 
        className='border px-5 py-2 bg-black text-white ' 
        onClick={()=> setShow(!show)}
        > {show ? 'Close':'Show'} Rules</button>
      </div>
      <div>
        { show &&  <GameRule /> }
      </div>
    </div>
  )
}

export default Middle

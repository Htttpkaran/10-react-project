import React, { useState } from 'react'
import heroImage from '../images/Service24_7-pana1.svg'
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [userData, setUserData] = useState([]);


  

  const handleSubmit = (e)=>{
    e.preventDefault(e);
    // Here you can handle the form submission, e.g., send data to a server or display a success message
    const newUserData = [...userData];
    newUserData.push({name,email,text});
    setUserData(newUserData);
    setName("");
    setEmail("");
    setText("");
    console.log("Form submitted:",userData);

  }
  return (
    <div className='mx-50 h-[80%] '>
      <div>
        <h1 className='uppercase text-5xl font-bold'>contact us</h1>
        <p className='uppercase my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt, amet et placeat accusamus, sequi omnis quos tempora dolorum quisquam iste cumque consequuntur? Architecto nostrum quisquam hic voluptate perferendis magni.</p>
      </div>
      <div className='flex justify-between    '>
        <div className="left  w-[50%]  px-8 py-20">
        <div className='flex justify-center gap-4 '>
            <button className=' uppercase border w-[50%] py-2 rounded-lg bg-black text-white cursor-pointer flex justify-center items-center gap-2 text-lg' onClick={() => console.log("Chat support active")}> <MdOutlineMessage /> via support chat</button>
            <button className=' uppercase border w-[50%] py-2 rounded-lg bg-black text-white cursor-pointer flex justify-center items-center gap-2 text-lg' onClick={() => console.log("Call support active")}> <IoCall /> via call</button>
        </div>
        <div className='flex items-center w-full mt-6'>
            <button className=' uppercase border text-center w-full py-2 rounded-lg cursor-pointer flex justify-center items-center gap-2 text-lg' onClick={() => console.log("Email support active")}> <MdOutlineMessage /> via email form</button>
        </div>
        <div className='mt-8 px-4 w-full'>
            <form action="" className='flex flex-col gap-8 ' onSubmit={(e)=>{
              handleSubmit(e)
            }} >
                <div className=' w-full relative '>
                    <label htmlFor="name" className='absolute -top-3 left-3 bg-white px-1 text-sm  font-medium ' >Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)  }
                    className='border border-gray-400 w-full text-lg px-2 py-1 focus:outline-none focus:border-black '   
                    />
                </div>
                <div className=' w-full relative '>
                    <label htmlFor="name" className='absolute -top-3 left-3 bg-white px-1 text-sm  font-medium ' >E-mail</label>
                    <input 
                    type="email" 
                    id="name" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-gray-400 w-full text-lg px-2 py-1 focus:outline-none focus:border-black '   
                    />
                </div>
                <div className=' w-full relative '>
                    <label htmlFor="name" className='absolute -top-3 left-3 bg-white px-1 text-sm  font-medium ' >TEXT</label>
                    <textarea 
                    id="name" 
                    value={text}
                    onChange={(e) =>setText(e.target.value)}
                    className='border border-gray-400 w-full text-lg px-2 py-1 focus:outline-none focus:border-black h-20 '   
                    />
                </div>
                
                <button className='w-[50%] border ml-55 rounded-lg bg-black text-white py-1 uppercase cursor-pointer'>Submit</button>
            </form>
        </div>
      </div>
      <div className="right ">
        <img src={heroImage} alt="" className='' />
      </div>
      </div>
    </div>
  )
}

export default HeroSection

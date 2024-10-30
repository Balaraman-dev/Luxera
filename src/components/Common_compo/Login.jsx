import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[name,setName]=useState("TrendHunter");
  const navigate=useNavigate();

  return (
      <div className='w-full flex justify-center items-center py-16'>
        <div className='w-1/3 shadow-xl flex items-center flex-col shadow-gray-300 border-4 border-[#642a1a] space-y-4 bg-light text-luxera py-10 rounded-3xl'>
            <h2 className='text-3xl'>Get Started By Signing </h2>
            <h2 className='text-3xl pb-5'>Up</h2>
          <div className='space-y-7 w-3/4 flex items-center flex-col text-luxera'>
              <div className='relative mr-10'>
                <input id='name' type="text" placeholder='eg. John' className='inputlog'onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="name" className='labellog'>Name</label>
              </div>
              <div className='relative mr-10'>
                <input id='mail' type="email" className='inputlog '/>
                <label htmlFor="mail" className='labellog'>Email ID</label>
              </div>
              <div className='relative mr-10'>
                <input id='log' type="password"  className='inputlog'/>
                <label htmlFor="log" className='labellog'>Password</label> 
              </div>
          </div>    
          <button onClick={()=>navigate(`/${name}`)} className='bg-luxera mt-8 hover:scale-y-110 duration-300 text-white px-8 py-1 rounded-xl'>Sign Up</button>
        </div>
      </div>
   )
}

export default Login

import React from 'react'

const Footer = () => {
  return (
    <div className='list-none md:flex justify-around  leading-8 text-luxera text-sm font-thin cursor-pointer md:text-md md:font-medium grid p-4 grid-cols-2'>
       <div className='p-4'>
        <h1 className='head_footer'>About us</h1>
          <li>contact us</li>
          <li>Info</li>
          <li>Address</li>
          <li>Location</li>
       </div>
       <div className='p-4'>
        <h1 className='head_footer'>Products</h1>
           <li>Electronics</li>
           <li>Clothing</li>
           <li>Womens Needs</li>
           <li>Furnitures</li>
           <li>Home Decors</li> 
       </div>
       <div className='p-4'>
        <h1 className='head_footer'>Payment</h1>
          <li>Bank Transfer</li>
          <li>UPI</li>
          <li>Cash On Delivery</li>
          <li>Luxera pay</li>
       </div>
       <div className='p-4'>
        <h1 className='head_footer'>BE ACTIVE</h1>
        <h2>Sign up to stay Updated on new Products</h2>
        <div className='mt-4 border-2 border-gray-400 md:p-2 p-1 flex rounded-lg relative'>  
          <input className='outline-none ' type="text" placeholder='Email Address'/>
          <button onClick={()=>(alert("Subscribed 🛒"))}  className='bg-luxera md:px-4 md:py-1 px-2 font-normal hover:scale-95 text-white rounded-lg m-auto absolute right-2 top-1'>SUBSCRIBE</button>  
        </div>
       </div>
    </div>
  )
}

export default Footer

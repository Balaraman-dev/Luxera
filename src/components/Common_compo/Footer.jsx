import React from 'react'

const Footer = () => {
  return (
    <div className='list-none flex justify-around my-20 leading-8 text-luxera cursor-pointer'>
       <div>
        <h1 className='head_footer'>About us</h1>
          <li>contact us</li>
          <li>Info</li>
       </div>
       <div>
        <h1 className='head_footer'>Products</h1>
           <li>Electronics</li>
           <li>Clothing</li>
           <li>Mens & Womens Accessories</li>
           <li>Furnitures</li>
           <li>Home Decors</li> 
       </div>
       <div>
        <h1 className='head_footer'>Payment</h1>
          <li>Bank Transfer</li>
          <li>UPI</li>
          <li>Cash On Delivery</li>
          <li>Luxera pay</li>
       </div>
       <div>
        <h1 className='head_footer'>BE ACTIVE</h1>
        <h2>Sign up to stay Updated on new Products</h2>
        <div className='mt-4 border-2 border-gray-400 p-2 flex rounded-lg'>  
          <input className=' outline-none' type="text" placeholder='Email Address'/>
          <button onClick={()=>(alert("Subscribed 🛒"))}  className='bg-luxera px-4 py-1 border-2 border-white  hover:bg-[#673223]  hover:border-[#642a1a] text-white rounded-lg m-auto '>SUBSCRIBE</button>  
        </div>
       </div>
    </div>
  )
}

export default Footer

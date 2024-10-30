import React from 'react'
import giffy from '../../assets/payment_page/place_done.png'
const Order_place = () => {
  return (
    <div className='text-xl mt-2 bg-gradient-to-r from-[#ffe8e2] w-full flex flex-col justify-center items-center p-20 text-luxera'>
      <div className='flex flex-col justify-center items-center space-y-3'>
        <h2 className='text-[150%]'> Your Order is Placed</h2>
        <h1 className='font-bold text-[156%]'>Successfully !</h1>
        <img src={giffy} className='w-1/2 pt-10' alt="" />
      </div>
    </div>
  )
}

export default Order_place

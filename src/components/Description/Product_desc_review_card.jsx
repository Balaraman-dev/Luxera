import React from 'react'
import Product_desc_stars from './Product_desc_stars'
import revie from '../../assets/product_desc_images/review_card_img.png'
const Product_desc_review_card = ({listr}) => {
  
  return (
    <div className=' shadow-shad cursor-pointer rounded-lg  w-1/3 p-3 '>
      <div className='flex'>
        <img src={revie} alt="gh" className='w-1/12 bg-gradient-to-b from-[rgba(255,232,226,1)] to-[rgba(255,255,255,1)] border-2 border-white shadow-lg shadow-gray-300  rounded-md'/>
        <h3 className='my-auto ml-3 text-luxera font-medium'>{listr.reviewerName}</h3>
      </div>
      <div className='my-3 font-light text-luxera'>{listr.comment}</div>
        <Product_desc_stars str={listr.rating}/> 
    </div>
  )
}

export default Product_desc_review_card

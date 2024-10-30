import React from 'react'
import { useNavigate } from 'react-router-dom';
import Product_desc_stars from '../Description/Product_desc_stars';

const Card_entire = ({rescard}) => {
  const navigate = useNavigate();

  return (
    <div className='py-3 duration-300 text-luxera cursor-pointer flex flex-col items-center ' style={{minHeight:"350px",minWidth:"250px"}} onClick={ () => navigate(`/details/${rescard.id}`)}>
      {rescard && <img src={rescard.images[0]}  alt="img" style={{minHeight:"230px",maxHeight:"230px"}} className=' h-full w-10/12 transition-all hover:translate-x-1 duration-250 hover:scale-105 p-2 bg-gradient-to-b from-[rgba(255,232,226,1)] to-[rgba(255,255,255,1)] border-4 border-white shadow-lg shadow-gray-300  rounded-lg'/>}
      {rescard && <h2 className='w-11/12 text-wrap pt-4 pl-3  font-normal capitalize'>{rescard.brand} |{rescard.tags.join(" |")} |New coming |{rescard.tags[0]} |New piece |Limited</h2>}
      {rescard && 
        <div className='w-full ml-6'>
          <span className='font-semibold pl-4'>₹ {Number(((rescard.price)*83.99).toFixed(0)).toLocaleString('en-IN')}</span>
          <span className='ml-2 font-thin'>{rescard.discountPercentage} % off</span>
        </div> 
      }
      <div className='mt-3 ml-11 w-full'>
      {rescard && <Product_desc_stars str={rescard.rating}/>}
     </div>
    </div>
  )
}

export default Card_entire

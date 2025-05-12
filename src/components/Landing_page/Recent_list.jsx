import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Recent_list = ({item}) => {
  const[dis,setDis]=useState();
  const navigate=useNavigate();
  
  useEffect(()=>{
      let url=`https://dummyjson.com/products/search?q=${item}`;
      axios.get(url)
      .then(res=>{
        setDis(res.data.products[0]);
      })
      .catch(e=>{
        console.error("The error is occured",e);
      }); 
    },[item]);
 
  return (
   <div className='shadow-shad md:w-1/6 w-1/3 flex justify-center items-center flex-col  rounded-2xl hover:scale-95 duration-200 ' onClick={ () => navigate(`/details/${dis.id}`)}>
     {dis &&  <img src={dis.images[0]} className='md:w-2/5 w-1/3 h-2/3' alt="img" />}
     {dis &&  <h2 className='text-luxera text-[12px] md:text-lg text-center capitalize pb-2'>{dis.category}</h2>}
   </div>
  ) 
} 

export default Recent_list

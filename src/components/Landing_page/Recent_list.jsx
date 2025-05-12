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
   <div className='shadow-shad md:w-4/12 w-2/12 flex justify-center items-center flex-col py-1 rounded-2xl hover:scale-95 duration-200 ' onClick={ () => navigate(`/details/${dis.id}`)}>
     {dis &&  <img src={dis.images[0]} className='md:min-w-90 md:max-w-90 md:max-h-90 md:mb-1' alt="img" />}
     {dis &&  <h2 className='text-luxera text-[12px] md:text-md text-center capitalize'>{dis.category}</h2>}
   </div>
  ) 
} 

export default Recent_list

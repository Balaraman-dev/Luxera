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
   <div className='shadow-shad w-1/6 flex justify-center items-center flex-col py-1 rounded-2xl hover:scale-105 duration-200 ' onClick={ () => navigate(`/details/${dis.id}`)}>
     {dis &&  <img src={dis.images[0]} className='w-2/5 mb-1 ' style={{minWidth:'90px',maxWidth:'90px',maxHeight:'90px'}} alt="img" />}
     {dis &&  <h2 className='text-luxera text-md capitalize'>{dis.category}</h2>}
   </div>
  ) 
} 

export default Recent_list

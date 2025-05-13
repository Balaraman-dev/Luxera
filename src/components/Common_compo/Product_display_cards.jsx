import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios'
import PropTypes from "prop-types";
import Card_entire from './Card_entire'
import no_res from '../../assets/no_results.png'

const Product_display_cards = ({category}) => {
  const { card_val }=useParams();
  const[cards,setCards]=useState([]); 
  const location=useLocation();
  const valstate = location.state || false;
  let cate=category;

  useEffect( () =>{
    let url;
    if( category ) {
      url=`https://dummyjson.com/products/category/${category}`;
    } else {
      if(valstate){
      url=`https://dummyjson.com/products/category/${card_val}`;
      }
      else{
      url=`https://dummyjson.com/products/search?q=${card_val}`;
      }
    }
    axios.get(url)
    .then(res=>{
      setCards(res.data.products);
    })
    .catch(e=>{
    console.error("The error is occured",e);
      }); 
    },[card_val])

  return (
    <div className='w-full md:px-5  flex flex-col '>
        {(cards.length==0) && <div className='w-full flex justify-center items-center mt-16'><img src={no_res}  className="1/10 " alt="No result" /></div>}
        {(cards.length==0) && <h3 className='w-full flex text-2xl text-luxera font-bold  justify-center my-10'>No Result Found !</h3> }
        {(cards.length!=0) &&<h3 className='md:text-2xl text-lg text-luxera font-semibold ml-3 md:ml-7 capitalize mt-5 md:mb-5 md:w-1/5 '>{(!valstate && !category)?"Searches from " :" "} {card_val || cate} :</h3>}
        <div className=' grid sm:grid-cols-2 md:grid-cols-5'>
         {cards && cards.map((card)=>
           <Card_entire rescard={card}/>)}        
        </div>
    </div>
  )
}

export default Product_display_cards

Product_display_cards.propTypes = {
  category: PropTypes.string
}
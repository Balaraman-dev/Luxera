import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import left_arrow from '../../assets/product_desc_images/left_arrow.png'
import right_arrow from '../../assets/product_desc_images/right_arrow.png'
const Card_slider_new = ({api}) => {
  const navigate=useNavigate();
  const [ind1,setInd1]=useState(0);
  const [ind2,setInd2]=useState(1);
  const [ind3,setInd3]=useState(2);
  const [val1,setval1]=useState(0);
  const [val2,setval2]=useState(1);
  const [val3,setval3]=useState(2);
  const [product1,setProducts1]=useState();
  const [product2,setProducts2]=useState();
  const [product3,setProducts3]=useState();
  const [fad,setFad]=useState(false);

    const increase=()=>{
      if(ind3!=api.length-1 ){
        setFad(true);
        setInd1(ind1+1);
        setInd2(ind2+1);
        setInd3(ind3+1);
      }};

    const decrease=()=>{
      if(ind1>0){
        setFad(true);
        setInd1(ind1-1);
        setInd2(ind2-1);
        setInd3(ind3-1);
    }};

    useEffect(() => {
      setval1(api[ind1]);
      setval2(api[ind2]);
      setval3(api[ind3]);
    }, [api,ind1, ind2, ind3]);

    useEffect(() => {
      const timer = setTimeout(() => setFad(false), 1200);
      return () => clearTimeout(timer);
    }, [fad]);
    
    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/${val1}`)
        .then(res => res.json())
        .then(data => {
          if (data.products) {
            setProducts1( data.products);
          } else {
            console.error('Products not found in the response', data);
          }
        })
        .catch(err => console.error(err));
    }, [ind1, val1]);

    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/${val2}`)
        .then(res => res.json())
        .then(data => {
          if (data.products) {
            setProducts2(data.products);
          } else {
            console.error('Products not found in the response', data);
          }
        })
        .catch(err => console.error(err));
    }, [ind2, val2]);

    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/${val3}`)
        .then(res => res.json())
        .then(data => {
          if (data.products) {
            setProducts3( data.products);
          } else {
            console.error('Products not found in the response', data);
          }
        })
        .catch(err => console.error(err));
    }, [ind3, val3]);

    const handleClick=(id)=>{
      navigate(`/details/${id}`);
    }

  return (
    <div className='flex mb-16 mt-8 w-25vw h-1/2 justify-center items-center'>
      <button className='mr-3 w-11 duration-200 hover:scale-110 border-transparent rounded-full ' onClick={decrease}>
      <img src={left_arrow} alt="img" />
      </button>
        
          {product1 && product1.length >0 && <div onClick={()=>(handleClick(product1[1].id))} className={`border-4 duration-300 py-5 ${fad? 'animate-fading scale-90':''} duration-150 border-white flex-col hover:scale-105 flex w-2/12 bg-gradient-to-b from-[rgba(255,233,227,1)] to-[rgba(255,255,255,1)] shadow-xl shadow-black-300 rounded-lg`}>
            <img src={product1[1].images[0]} style={{maxHeight:'200px'}} className='w-8/12 mx-auto'alt="" />
            <h5 className='m-auto py-1 mt-2  text-luxera tex t-xl font-normal capitalize'>{val1}</h5>
          </div> }  
          
          { product2 && product2.length >0 && <div onClick={()=>(handleClick(product2[1].id))} className="border-4 duration-300 py-5 hover:scale-110 border-white flex flex-col z-10 justify-center w-1/5 scale-105 bg-gradient-to-b from-[rgba(255,233,227,1)] to-[rgba(255,255,255,1)] rounded-lg shadow-xl shadow-black-300">
            <img  src={product2[1].images[0]} alt="" style={{maxHeight:'300px'}}  className='w-10/12  mx-auto' />
            <h5 className='m-auto mt-2 py-2  text-luxera text-xl font-normal capitalize' >{val2}</h5>
          </div> }

          { product3 && product3.length >0  && <div onClick={()=>(handleClick(product3[1].id))} className={`border-4 duration-300  ${fad? 'animate-fading scale-90':''} py-5 border-white duration-150 flex-col hover:scale-105 text-center  flex w-2/12 bg-gradient-to-b from-[rgba(255,233,227,1)] to-[rgba(255,255,255,1)] shadow-xl shadow-black-300 rounded-lg`}>
            <img src={product3[1].images[0]}  style={{maxHeight:'200px'}}  className='w-8/12 mx-auto 'alt="" />
            <h5 className='m-auto mt-2  py-1  text-luxera text-xl font-normal capitalize' >{val3}</h5>
          </div> } 
            
          <button className='ml-3 w-11 duration-200 hover:scale-110 rounded-full border-transparent' onClick={increase}>
          <img src={right_arrow} alt="img" />
          </button>       
    </div>
  )
}

export default Card_slider_new

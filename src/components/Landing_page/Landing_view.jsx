import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams,useLocation } from 'react-router-dom'
import Card_slider from './Card_slider_new.jsx'
import Recent_list from './Recent_list.jsx'
import View_all from './View_all.jsx'
import searchimg from "../../src/assets/search.png";
import dotting from "../../src/assets/dotted_top.png";

const Landing_view = ({recent}) => {
   const[apilist,setApilist]=useState(0);
   const[imgs,setImgs]=useState([]);
   const navigate=useNavigate();
   const[all,setAll]=useState(false); 
   const {name}=useParams();
   const [items, setItems] =recent ;
   const [itms,setItms]=useState(); 

  useEffect(()=>{
      setItms(items);   
  },[items])
    
  useEffect(()=>{
      let url=`https://dummyjson.com/products/category-list`;
      axios.get(url)
      .then(res=>{
        setApilist(res.data);
      })
    .catch(e=>{
      console.error("The error is occured",e);
     });
  },[]);
  
  function timesleep(time){
    return new Promise((resolve)=>{
      setTimeout(resolve,time||1000);
    });
  }
  useEffect(() => { 
    async function fetchImg() {
      for( let i=0; i<apilist.length; i++ ) {
          let imageitem=await axios.get(`https://dummyjson.com/products/category/${apilist[i]}`)
          if (imageitem.data) {
            setImgs(imageitem.data);
            await timesleep(4000);
          } else {
            console.log("image response is error"); 
          }
        }
      }
      fetchImg();
  },[apilist]);

  return (
    <div >
      <div className=' w-full flex leading-loose tracking-wider justify-around p-4 bg-gradient-to-r from-[#ffe7e0] to-[rgba(255,255,255,1)]'> 
        <div className='flex flex-col justify-center'>
          <div> <span className='text-5xl font-thin text-luxera'>Hey,</span><span className='text-4xl text-luxera font-medium'> {name||"Trendseeeker"} !</span></div>
          <h3 className='text-5xl font-semibold text-luxera '>Raining offers for</h3>
          <h1 className='text-5xl font-semibold text-luxera '>Hot summer !</h1>
          <h5 className='text-luxera text-3xl font-normal'>minimum 25% on all products</h5>
          <div className='flex mt-5 space-x-10'>
            <button className='bg-luxera text-xl rounded-lg py-2 px-4 text-white duration-100 hover:scale-y-105' onClick={()=>navigate("/login")}>Shop now</button>
            <h3 className=' text-luxera my-auto font-medium text-2xl'><button className='border-b-2 hover:scale-105 duration-150 border-b-[#642a1a]' onClick={()=>setAll(!all)}> View all </button></h3>   
          </div>
        </div>
        {imgs.products && (imgs.products).length>0 && <img className='w-5/12 cursor-pointer' src={imgs.products[2].images[0]} onClick={ () => navigate(`/details/${imgs.products[2].id}`)} alt="bed" style={{maxHeight:'500px', minHeight:'500px'}}/> } 
      </div>
      <div className='my-16 ml-12 '>
        <div className='flex '>
          <img src={searchimg} className='w-8 ' alt="search" />
          <h3 className='my-auto ml-2 text-xl text-luxera'>Recent Searches</h3>
        </div>

        <div className='flex mt-6 justify-around w-4/5 '>
           {itms && itms.length>0 && itms.map((val)=> <Recent_list item={val}/> ) }  
        </div>
        {all && <View_all api={apilist}/>}
      </div>
      <div className='py-16 bg-gradient-to-t from-[rgba(255,255,255,1)] to-[#fef4f1]'>
         <ul className=' w-11/12 mx-auto flex justify-around text-luxera font-medium text-lg '>
            <li className='landing_name'>Trending Offer</li>
            <li className='landing_name'>Best Seller</li>
            <li className='landing_name'>Top Rated</li>
            <li className='landing_name'>New Arrival</li>
            <li className='landing_name'>Best Value</li>
         </ul>
        <Card_slider api={apilist}/>
        <img src={dotting} className='flex m-auto w-14' alt="" />
      </div>
     </div>
    )
  }

export default Landing_view

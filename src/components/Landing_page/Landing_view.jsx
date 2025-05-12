import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams,useLocation } from 'react-router-dom'
import Card_slider from './Card_slider_new.jsx'
import Recent_list from './Recent_list.jsx'
import View_all from './View_all.jsx'
import searchimg from "../../assets/search.png";
import dotting from "../../assets/dotted_top.png";

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
      <div className='py-8 w-full flex md:leading-loose md:tracking-wider justify-around px-4 bg-gradient-to-r from-[#ffe7e0] to-[rgb(255,255,255)]'> 
        <div className='flex flex-col justify-center'>
          <div> <span className='sm:text-2xl text-xl font-thin text-luxera md:text-5xl'>Hey,</span><span className='md:text-4xl text-luxera  sm:text-2xl font-medium'> {name||"Trendseeeker"} !</span></div>
          <h3 className='w-3/4 md:text-5xl font-semibold text-luxera sm:text-3xl text-lg'>Raining offers for Hot summer !</h3>
          <h5 className='text-luxera md:text-3xl font-normal sm:text-2xl'>Minimum 25% on all products</h5>
          <div className='w-3/4 flex md:flex-row flex-col mt-5 gap-2'>
            <button className='w-3/4 md:w-1/3 bg-luxera md:text-xl rounded-lg px-2 py-2 sm:px-4 text-white duration-150 hover:scale-95 sm:text-sm text-[10px] ' onClick={() =>navigate("/login")}>Shop now</button>

            <button className='w-3/4 md:w-1/3 bg-luxera sm:text-sm text-[10px] md:text-xl rounded-lg py-2 text-white text-md duration-150 hover:scale-95' onClick={()=>setAll(!all)}> View all </button>   
          </div>
        </div>
        {imgs.products && (imgs.products).length>0 && <img className='md:w-5/12 w-1/3 md:max-h-500 max-h:96 cursor-pointer' src={imgs.products[2].images[0]} onClick={ () => navigate(`/details/${imgs.products[2].id}`)} alt="bed" /> } 
      </div>
      <div className='md:my-16 my-8 md:ml-12 ml-4'>
        <div className='flex '>
          <img src={searchimg} className='md:w-8 w-6 mr-2' alt="search" />
          <h3 className='my-auto md:text-xl text-md text-luxera'>Recent Searches</h3>
        </div>

        <div className='flex md:mt-6 mt-4 md:w-4/5 w-full gap-3 md:gap-8 py-4 px-2 overflow-scroll scrollbar-none '>
            {itms && itms.length>0 && itms.map((val)=> <Recent_list item={val}/> ) }  
        </div>
        {all && <View_all api={apilist}/>}
      </div>
      <div className='py-16 bg-gradient-to-t from-[rgba(255,255,255,1)] to-[#fef4f1]'>
         <ul className=' w-11/12 mx-auto flex justify-around text-luxera md:text-lg sm:text-sm text-[8px] gap-1'>
            <li className='landing_name'>Trending Offer</li>
            <li className='landing_name'>Best Seller</li>
            <li className='landing_name'>Top Rated</li>
            <li className='landing_name'>New Arrival</li>
            <li className='landing_name'>Best Value</li>
         </ul>
        <Card_slider api={apilist}/>
        <img src={dotting} className='flex m-auto md:w-14 sm:w-10 w-8' alt="" />
      </div>
     </div>
    )
  }

export default Landing_view

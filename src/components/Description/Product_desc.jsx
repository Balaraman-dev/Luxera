import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Product_desc_sliderreview from './Product_desc_review.jsx'
import Product_desc_review_card from './Product_desc_review_card.jsx'
import Card_entire from '../Common_compo/Card_entire.jsx'
import Buton from '../Common_compo/Buton.jsx'
import right_arrow from '../../assets/product_desc_images/right_arrow.png'
import left_arrow from '../../assets/product_desc_images/left_arrow.png'
import Imgdes1 from '../../assets/product_desc_images/free_delivery.png';
import Imgdes2 from '../../assets/product_desc_images/fast_delivery.png';
import Imgdes3 from '../../assets/product_desc_images/online_support.png';
import Imgdes4 from '../../assets/product_desc_images/payment_method.png';
import success from '../../assets/cart_success.png'
import lxr from '../../assets/luxerapng.png';
import Img3 from "../../assets/cart_header.png";

const Product_desc = ( { cart } ) => {
  const { id } = useParams();
  const [list,setList]=useState(null);
  const [indimg,setIndImg]=useState(0);
  const [recent,setRecent]=useState('');
  const [recentList,setRecentList]=useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fad,setFad]=useState(false);
  const [click,setClick]=useState();
  const cardsToShow = 5; 
  const navigate=useNavigate();
  
  const [add, setAdd] = cart;

  useEffect(()=>{
    addElement(click);
  },[click]);

  const addElement = (newElement) => {
    setAdd((prev) => {
      const updated = [...prev, newElement];
      return updated;
    });
  }

  const clickbasket=()=>{
    navigate(`/basket/:${add}`) 
  }
 
  const nextSlide = () => {
    if (currentIndex + cardsToShow < recentList.length) {
      setFad(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setFad(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => 
      setFad(false),700)
    return () => clearTimeout(timer);
  }, [fad]);

  useEffect(()=>{
      let url=`https://dummyjson.com/products/${id}`;
      axios.get(url)
      .then(res=>{
        setList(res.data);
        setRecent(res.data.category); 
      })
    .catch(e=>{
    console.error("The error is occured",e);
      });
    },[id]);
    
    useEffect(()=>{ 
      let url=`https://dummyjson.com/products/category/${recent}`;
      list && axios.get(url)
      .then((rec)=>{
        if(Array.isArray(rec.data.products)){
          setRecentList(rec.data.products);
        }
      })
    .catch(e=>{
    console.error("The error is occured",e);
      });
    },[recent]); 
    

  return (
    <div>
       <div  className='md:flex  mt-15m-auto '>
        <div className='relative  md:w-1/2 w-full ml-1  bg-gradient-to-r from-[#ffe8e2] to-[rgba(255,255,255,1)] h-1/12'> 
          <div className='md:w-1/4 w-1/4 relative'>
            {list && <img src={lxr} className='absolute top-6 ' alt="" />}
          </div>  

          {list && <img src={list.images[indimg]} className='z-0 mx-auto md:mt-10 mt-4 md:max-w-[400px] md:min-w-[400px] w-2/3' alt=""/> }

          <div className='w-full  flex justify-center flex-col items-end z-20 bottom-3 md:right-6 md:bottom-5 -right-3 space-y-2 absolute'>
              {list && 
              (list.images).map((img,index)=>(
                <img key={index} src={img} onClick={()=>(setIndImg(index))} alt="" className='desc_inner min-w-8'/>
              ))}
          </div>

        </div>
        {list && <div className='md:w-1/2 w-full text-luxera space-y-3 p-3'>
         <h2 className='md:text-2xl sm:text-xl  capitalize mb-2'>{list.brand}| {list.category}| Modern |{list.tags[1]} |Attractive {list.tags[0]}| Limited Edition |Sophisticated</h2>
         <span className='text-xl font-medium '> ₹ {Number(((list.price)*83.98).toFixed(0)).toLocaleString('en-IN')} </span> <span>{list.discountPercentage}% off</span>
         <h3 className='text-sm md:text-lg'>{list.description}</h3>
         <li className='ml-4 font-semibold'>{list.warrantyInformation}</li>
         <li className='ml-4 font-semibold'>{list.shippingInformation}</li>
         <li className='ml-4 font-bold text-luxera'>Overall Rating - {list.rating} *</li> 
         <h1 className='text-xl md:text-2xl text-green-700'>{list.availabilityStatus}</h1>
            <div className='sm:flex h-1/12 w-10 space-x-24 ml-8 pt-4 hidden sm:block'>
                <img src={Imgdes1} className='w-10/12 h-10/12' alt="" />
                <img src={Imgdes2} className='w-10/12 h-10/12' alt="" />
                <img src={Imgdes3} className='w-10/12 h-10/12' alt="" />
                <img src={Imgdes4} className='w-10/12 h-10/12' alt="" />
            </div>
            <ul className='sm:flex md:flex-row flex-col md:space-x-8 ml-2 md:font-thin sm:block hidden'>
              <li>Free shipping</li>
              <li>Fast delivery</li>
              <li>Online support </li>
              <li>Payment Methods</li> 
            </ul> 
            <div className='w-full flex md:flex  md:space-x-10 md:py-10'>
              
                <Buton onClick={()=>navigate(`/payment/${(list.price)}`)} btn="Buy now"/>
             
                  <div className='relative'>
                    <Buton onClick={()=>setClick(list.id)} btn="Add to cart"/>
                    {click && <img src={success} className='absolute right-2 -top-3 border-2 border-[#642a1a] rounded-full w-2/12' alt="" />}  
                  </div>
                <button className='border-2 flex justify-center duration-200 items-center border-[#642a1a] rounded-lg hover:scale-95' onClick={clickbasket}><img className='w-3/5' src={Img3} alt="" />  </button>
            </div>
        </div>}
       </div>

       {list && <div className='md:space-y-3 space-y-2 ml-7 md:ml-32 mt-4 md:mt-8'>
        <h2 className='text-luxera font-normal md:text-2xl'> Rating And Reviews </h2>

        <Product_desc_sliderreview bar={5} val={5}/>
        <Product_desc_sliderreview bar={2} val={4}/>
        <Product_desc_sliderreview bar={4} val={3}/>
        <Product_desc_sliderreview bar={3} val={2}/>
        <Product_desc_sliderreview bar={2} val={1}/> 

       </div>}

       <div className='flex md:flex-row flex-col my-7 md:my-14 w-full md:w-11/12 md:mx-auto mx-2.5 gap-4'>
        {list && list.reviews.map((element)=>( <Product_desc_review_card listr={element}/>))}
       </div>

      <div className='w-11/12 m-auto md:mt-20 mt-10 md:mb-32 mb-16'>
        <h2 className='text-luxera my-4 md:text-xl'>Similar Products</h2>

      <div className="relative w-full flex items-center justify-center overflow-hidden">
          <button onClick={prevSlide} className="absolute md:w-12 md:block hidden left-0 z-10 w-8 rounded-full border-transparent hover:scale-95"> 
             <img src={left_arrow} className="w-full rounded-full" alt="arrow" />
          </button>

            <div className="flex overflow-hidden tra w-full justify-center transition-all duration-300">
              <div className={`flex transition-all duration-500 ${fad? ' translate-x-5':''} `} >
                  {recentList.slice(currentIndex, currentIndex + cardsToShow).map((elem) => (
                  <Card_entire key={elem.id} rescard={elem} />
                ))}
                </div>
            </div>
            <button onClick={nextSlide} className="absolute md:w-12 w-8 right-0 z-10 hover:scale-95 rounded-full md:block hidden border-transparent ">
                <img src={right_arrow} alt="arrow" />
            </button>
      </div>
    </div>  
    </div>  

  )
}

export default Product_desc

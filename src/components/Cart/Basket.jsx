import { useNavigate } from 'react-router-dom'
import {React,useState,useEffect }from 'react'
import Card_cart_list from './Card_cart_list'
import Buton from '../Common_compo/Buton'
import no_img from '../../assets/no_results.png'
import cartimg from '../../assets/cart_header.png'

const Basket = ( { cart } ) => {
  const navigate=useNavigate()
  const [add, setAdd] = cart;
  const [add1,setAdd1]=useState([]);
  const [amount,setAmount]=useState({});

  useEffect(() => {
    const clean = add.filter(value => 
      !isNaN(value) );
      setAdd1(clean);
    }, [add]);

  let handleProceed = () => {
    let amt = Object.values(amount).reduce( (acc, curr) => acc + curr, 0);
    navigate(`/payment/${amt}`)
  }

  return (
    <div className='w-full'>
      <div className=' p-10 flex bg-gradient-to-r from-[#ffe7e0] to-[#ffffff]  text-luxera'>
        <div className=' pl-12 space-y-6 w-1/5'>
           <div className='flex space-x-2 w-full'>
            <img src={cartimg} className='w-1/4' style={{minWidth:'50px'}} alt="img" />
            <h2 className='my-auto text-xl font-semibold'>Basket Bliss</h2>
           </div> 
        </div>

        {add1.length==0 && <div className=' w-full flex  flex-col  justify-end items-end'>
         <img src={no_img} className='w-1/4' alt='No Products'/>
         <h2 className='text-xl mt-5 font-semibold'>Basket is Empty !</h2>  
        </div>}

        <div className='w-4/5 grid grid-cols-1 md:grid-cols-2'>
            {add1 && add1.map((val)=><Card_cart_list ids={val} setCost={setAmount} remEle={setAdd}/>)}
        </div>
      </div>
      <div className='w-full mt-16 flex justify-center'>
        <Buton btn="Proceed to Pay" onClick={handleProceed} />    
      </div>
     </div>
  )
}

export default Basket

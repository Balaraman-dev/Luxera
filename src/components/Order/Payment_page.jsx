import Buton from '../Common_compo/Buton.jsx'
import cashon from '../../assets/payment_page/cod.png';
import upi from '../../assets/payment_page/upi.png';
import banking from '../../assets/payment_page/bank_trans.png';
import building from '../../assets/payment_page/building.png';
import city from '../../assets/payment_page/city.png';
import landmark from '../../assets/payment_page/location.png';
import pin from '../../assets/payment_page/pin.png';
import { useNavigate,useParams } from 'react-router-dom';
import { useState } from 'react';

const Payment_page = () => {
    const [selectedOption, setSelectedOption] = useState('');   
    const navigate=useNavigate();
    let {pay}=useParams();
    pay=Number(pay*83.98);

    const alerting=()=>{
      alert("Address is Saved !!");
    }  

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const place=()=>{
      if(selectedOption){
      navigate("/order");
      }
      else{
        alert("Select the Payment Method...")
      }
    }

  return (
    
    <div className='text-luxera'>
      <div className='md:w-11/12 w-full flex md:flex-row flex-col mt-4  md:py-24 py-12 md:px-28 bg-gradient-to-b from-[#ffe8e2] md:bg-gradient-to-r from-[#ffe8e2]'>
        <div className='flex flex-col space-y-5 md:w-2/5 ml-4 md:ml-8'>
            <h2 className='md:text-xl text-lg font-semibold'>Delivery Address :</h2>
            <div className='w-11/12  relative '>
              <input type="text" className='payment-sty' placeholder='Building_No'/>
              <img src={building} className='pay_img' alt="img_loading" />
            </div>
            <div className='w-11/12  relative'>
              <input type="text" className='payment-sty' placeholder='LandMark'/>
              <img src={landmark} className='pay_img' alt="img_loading" />
            </div>
            <div className='w-11/12  relative'>
              <input type="text" className='payment-sty' placeholder='City'/>
              <img src={city} className='pay_img' alt="img_loading" />     
            </div>
            <div className='w-11/12  relative'> 
              <input type="number" className='payment-sty' placeholder='Pincode'/>
              <img src={pin} className='pay_img' alt="img_loading" />
            </div>
            <div className='md:w-3/5 md:flex w-full items-center justify-center'>
               <button className='bg-luxera duration-200 text-white w-11/12 md:w-2/5 py-1 rounded-lg text-md md:text-lg hover:scale-95' onClick={alerting}>Save</button>
            </div>
        </div>
        <div className='md:w-2/4  w-full font-semibold text-luxera md:border-l-4  border-[#642a1a] flex flex-col md:px-28 pb-7 px-4 md:mt-0 mt-12'>
        <h2 className='text-xl font-semibold md:pb-4 pb-2 md:mt-2'>Order Details:</h2>
         <table className='md:text-lg '>
            <tr>
                <td className='pt-3'>Price of Details</td>
                <td className='pr-2'>:</td>
                {pay && <td>₹ {Number((pay).toFixed(0)).toLocaleString('en-IN')}</td>}
            </tr>
            <tr>
                <td className='pt-3'>Delivery</td>
                <td>:</td>
                <td>₹ {Number((pay*0.05).toFixed(0)).toLocaleString('en-IN')}</td>
            </tr>
            <tr>
                <td className='pt-3'>Actual Price</td>
                <td>:</td>
                {pay && <td>₹ {Number(((pay)+(pay*0.02)).toFixed(0)).toLocaleString('en-IN')}</td>}
            </tr>
            <tr>
                <td className='pt-3 '>Discount</td>
                <td>:</td>
                <td className='line-through'>₹ {Number((pay*0.02).toFixed(0)).toLocaleString('en-IN')}</td>
            </tr>
            <tr>
                <td className='pt-3'>Total</td>
                <td>:</td>
                <td>₹ {Number((pay+(pay*0.05)).toFixed(0)).toLocaleString('en-IN')}</td>
            </tr>
         </table>
      </div>
        
      </div>
      <h2 className='md:text-xl text-lg md:pt-14 font-semibold pb-7 md:pl-24 pl-12'>Payment Methods </h2>
      <form className='w-full md:w-11/12 flex md:flex-row flex-col md:justify-around gap-4 md:gap-0   mx-5'>
        <div className='paypage'>
          <input id='cash' name="group1" value="Option 1" checked={selectedOption === 'Option 1'} onChange={handleChange} className='accent-red-900 h-5 md:w-5 my-auto' type="radio"/>
          <label htmlFor="cash" className='text-sm md:text-lg'>Cash On Delivery</label>
          <img src={cashon} className='w-1/12' alt="cash" />
        </div>
        <div className='paypage'>
           <input id='pay' name="group1" value="Option 2" checked={selectedOption === 'Option 2'} onChange={handleChange} className='h-5 md:w-5 accent-red-900 my-auto' type="radio"/>
           <label htmlFor="pay" className='text-sm md:text-lg'>UPI Payment </label>   
           <img src={upi} className='w-1/12' alt="upi" />
        </div>
        <div  className='paypage'>
           <input id='net' name="group1"  value="Option 3" checked={selectedOption === 'Option 3'} onChange={handleChange}  className='h-5  md:w-5 accent-red-900 my-auto' type="radio"/>
           <label htmlFor="net" className='text-sm md:text-lg'>Net Banking </label>
           <img src={banking} className='w-1/12' alt="cash bank" />
        </div>
      </form>
      <div className='w-full flex justify-center mt-8 mb-4 md:mb-16 md:mt-24'>
        <Buton onClick={place} btn="Place Order"/>
      </div>
    </div>
  )
}

export default Payment_page

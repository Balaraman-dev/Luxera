import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card_cart_list = ({ ids, setCost, remEle}) => {
  const [basket, setBasket] = useState([]); 
  const navigate=useNavigate();

  useEffect(() => {
    let url = `https://dummyjson.com/products/${ids}`;
    axios
      .get(url)
      .then((res) => {
        setBasket( [res.data] )
        })
      .catch((e) => {
        console.error("The error occurred", e);
        });
    }, [ids]);
  
    const removeItem = (productId) => {
      remEle( prev => prev.filter( ele => ele !== productId))
    };

    useEffect( () => {
      if( basket ) {
        basket.forEach(val => {
        setCost( prev => ( {...prev, [ids]:val.price}));
        })}
    }, [basket])

  return (
    <div>
      {basket.map((item) => (
        <div key={item.id} onClick={ () => navigate(`/details/${item.id}`)} className='bg-white rounded-lg m-3 flex p-1'>
          <img 
            src={item.images ? item.images[0] : ""}  
            className='w-1/3 rounded-md  bg-gradient-to-r p-2 from-[#ffe7e0] to-[#ffffff]' 
            style={{ maxWidth: '220px', maxHeight: '220px' }} 
            alt="img" 
          />
          <div className='space-y-2 py-6 px-1'>
            <h2 className='capitalize'>{item.category} | Modern | {item.brand} | {item.tags.join("| ")} | New Piece  </h2>
            <div className='flex space-x-2 font-semibold'>
              <div>₹ { Number(((item.price) * 83.98).toFixed(0)).toLocaleString('en-IN')}</div>
              <span className='my-auto font-thin text-sm'>{item.discountPercentage}% off</span>
            </div>
            <div className='flex w-1/2'>
              <h2>Quantity</h2>
              <input  type="number" className='outline outline-1 border-none rounded-md pl-1 w-3/12 ml-4' />
            </div>
            <button className='bg-luxera font-thin text-white rounded-md px-7 py-1 hover:bg-[#842a11]' onClick={() => removeItem(item.id)} > Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card_cart_list;

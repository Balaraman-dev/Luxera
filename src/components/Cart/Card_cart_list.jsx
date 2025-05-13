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
    }, [basket]);

    const handleChild= (event) => {
      event.stopPropagation();
    };

  return (
    <div>
      {basket.map((item) => (
        <div key={item.id} onClick={ () => navigate(`/details/${item.id}`)} className='bg-white rounded-lg md:m-3 mt-4 flex p-1'>
          <img 
            src={item.images ? item.images[0] : ""}  
            className='w-1/3 rounded-md  bg-gradient-to-r p-2 from-[#ffe7e0] to-[#ffffff] max-w-[220px] min-w-[100px] md:min-w-[220px]' 
            alt="img" 
          />
          <div className='md:space-y-2 md:py-6 py-2 px-1'>
            <h2 className='capitalize text-sm md:text-lg'>{item.category} | Modern | {item.brand} | {item.tags.join("| ")} | New Piece  </h2>
            <div className='md:flex space-x-2 font-semibold'>
              <div>₹ { Number(((item.price) * 83.98).toFixed(0)).toLocaleString('en-IN')}</div>
              <span className='my-auto font-thin text-sm'>{item.discountPercentage}% off</span>
            </div>
            <div className='flex w-1/2'>
              <h2>Quantity</h2>
              <input  type="number" className='outline outline-1 border-none rounded-md md:pl-1 md:w-3/12 w-8 md:ml-4 ml-1' />
            </div>
            <button className='bg-luxera font-thin text-white rounded-md px-7 md:text-lg text-sm mt-2 py-1 hover:bg-[#842a11]'  onClick={(event) => { handleChild(event); removeItem(item.id); 
        }} > Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card_cart_list;

import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product_desc from './Description/Product_desc'
import Landing_view from './Landing_page/Landing_view.jsx'
import Header_sticky from './Common_compo/Header_sticky.jsx'
import Footer from './Common_compo/Footer.jsx';
import Basket from './Cart/Basket.jsx';
import Payment_page from './Order/Payment_page.jsx';
import Order_place from './Order/Order_place.jsx';
import Login from './Common_compo/Login.jsx';
import Display_card from './Common_compo/Product_display_cards.jsx'
import Recent from './Landing_page/Recent_list.jsx';

const Main_component = () => {
  const [ add, setAdd ] = useState([]);
  const [items,setItems]=useState(['laptop','decoration','shoes','watch','lipstick']);

  return (
    <div className='opensans selection:bg-[#703525] selection:text-white'>
        <Router>
          <Header_sticky recent={[items,setItems]}/>
            <Routes>
                <Route path='/' element={<Landing_view recent={[items,setItems]} />} />
                <Route path='/details/:id' element={<Product_desc cart={ [ add, setAdd] }/>} /> 
                <Route path='/payment/:pay' element={ <Payment_page/> } />
                <Route path='/basket' element={<Basket cart={ [ add, setAdd ] }/>}/>
                <Route path='/basket/:id' element={<Basket cart={ [ add, setAdd ] }/>}/>
                <Route path='/order' element={<Order_place/>}/>
                <Route path='/:name' element={<Landing_view recent={[items,setItems]}/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dis_cards/:card_val' element={<Display_card/>}/>
                <Route path='/Recent/:textsearch' element={<Recent/>}/>
            </Routes>
          <Footer/>   
        </Router>
    </div>
  )
}

export default Main_component

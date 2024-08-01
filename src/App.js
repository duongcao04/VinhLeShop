
import { Route, Routes } from 'react-router-dom';
import './App.css';

import BT1 from './bt1/bt1';
import BT2 from './bt2/bt2';
import BT3 from './bt3/bt3';
import BT4 from './bt4/bt4';
import Login from './bt4/pages/login';
import Header from './bt4/component/header';
import Register from './bt4/pages/register';
import AboutUs from './bt4/pages/aboutUs';
import Product from './bt4/pages/product';


function App() {
  
  return (
   <Routes>
    <Route path='/bt1' element={<BT1/>}/>
    <Route path='/bt2' element={<BT2/>}/>
    <Route path='/bt3' element={<BT3/>}/>
    <Route path='/bt4' element={<BT4 />}>
    <Route path='/bt4/product' element={<Product/>}/>
    <Route path='/bt4/aboutus' element={<AboutUs/>}/>
    <Route path='/bt4/login' element={<Login/>}/>
    <Route path='/bt4/register' element={<Register/>}/>
    <Route path='/bt4/header' element={<Header/>}/>

    </Route>
   </Routes>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './welcome';
import Header from './Components/Header/Header';
import HomePage from './Components/homePage/homePage';
import ShopPage from './Components/ShopPage/shopPage';
import '../css/app.css';
import ProductPage from './Components/ProductPage/Product';

import About from './Components/About/AboutPage';
// import Demofooter from './Components/Footer/demofooter';
// import {Footer} from './Components/Footer/Footer';

ReactDOM.render(
    <HashRouter>
        {<Header/>}
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/homePage" element={<HomePage/>}></Route>
            <Route path="/shopPage" element={<ShopPage/>}></Route>
            <Route path="/cartPage" element={<Welcome/>}></Route>
            <Route path="/productPage" element={<ProductPage/>}></Route>
            <Route path="/aboutPage" element={<About/>}></Route>
            <Route path="/loginPage" element={<Welcome/>}></Route>
            
        </Routes> 
        {/* <Demofooter/> */}
    {/* <Footer/> */}
    </HashRouter>
  ,document.getElementById('root')
);


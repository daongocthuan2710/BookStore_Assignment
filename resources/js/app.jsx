import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Welcome from './welcome';
import Header from './Components/Header/Header';
import HomePage from './Components/homePage/homePage';
import ShopPage from './Components/ShopPage/shopPage';
import About from './Components/About/AboutPage';
import Products from './Components/ProductPage/Product';
import Footer from './Components/Footer/Footer';

import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './Components/Cart/cartPage';

ReactDOM.render(
    <HashRouter>
        {<Header/>}
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/homePage" element={<HomePage/>}></Route>
            <Route path="/shopPage" element={<ShopPage/>}></Route>
            <Route path="/cartPage" element={<CartPage/>}></Route>
            <Route path="/productPage/:id" element={<Products/>}></Route>
            <Route path="/aboutPage" element={<About/>}></Route>
            <Route path="/loginPage" element={<Welcome/>}></Route>
            
        </Routes> 
    <Footer/>
    </HashRouter>
  ,document.getElementById('root')
);


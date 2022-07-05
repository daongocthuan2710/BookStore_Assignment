import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './welcome';
import Header from './Components/Header/Header';
import HomePage from './Components/homePage/homePage';
// import {Example} from './Components./homePage/featuredBooksGrid'


ReactDOM.render(
    <HashRouter>
        {<Header/>}
        <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/homePage" element={<HomePage/>}></Route>
            <Route path="/shopPage" element={<Welcome/>}></Route>
            <Route path="/cartPage" element={<Welcome/>}></Route>
            <Route path="/productPage" element={<Welcome/>}></Route>
            <Route path="/aboutPage" element={<Welcome/>}></Route>
            <Route path="/loginPage" element={<Welcome/>}></Route>

        </Routes> 
    </HashRouter>

  ,document.getElementById('root')
);

// ReactDOM.render(
//     <Welcome/>,document.getElementById('root')
//   );


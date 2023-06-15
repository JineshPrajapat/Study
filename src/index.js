import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
// import Courseinfo from './components/Courseinfo';
// import Layout from './components/Layout';
// import Category from './components/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="products/:productId" element={<ProductDetail/>}/>
        {/* <Route path="categories/:categoryId" element={<Category/>}/> */}
        {/* <Route path="products/:courseId" element={<Courseinfo/>}/> */}
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

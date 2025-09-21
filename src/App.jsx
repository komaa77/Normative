import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Menu';
import FlashSales from './components/Flash-Sales';
import Categories from './components/categories';
import Button from './components/button';
import ProductCards from './components/Product-Cards';
import Offercard from './components/offer-card';
import OurProducts from './components/our-products';
import Arrival from './components/Arrival';
import Service from './components/Service';
import Footer from './components/Footer';

const App = () =>{
  return (
    <>
    <Header/>
    <Navbar/>
    <Main/>
    <FlashSales/>
    <ProductCards/>
    <Categories/>
    <Button/>
    <Offercard/>
    <OurProducts/>
    <Arrival/>
    <Service/>
    <Footer/>
    </>
  );
};

export default App

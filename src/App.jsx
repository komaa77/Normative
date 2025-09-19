import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Menu';
import FlashSales from './components/Flash-Sales';
import Categories from './components/categories';
import Button from './components/button';
import ProductCards from './components/Product-Cards';

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
    </>
  );
};

export default App

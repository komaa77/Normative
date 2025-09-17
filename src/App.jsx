import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/navbar';
import Main from './components/Menu';
import FlashSales from './components/Flash-Sales';
import Categories from './components/categories';
import Button from './components/button';

const App = () =>{
  return (
    <>
    <Header/>
    <Navbar/>
    <Main/>
    <FlashSales/>
    <Categories/>
    <Button/>
    </>
  );
};

export default App

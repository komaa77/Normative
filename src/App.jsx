import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from "./pages/Signup";
import Login from './pages/Login';
import Wishlist from './pages/wishlist';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignUp/>} />
        <Route path="/log" element={<Login/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </Router>
  );
};

export default App;

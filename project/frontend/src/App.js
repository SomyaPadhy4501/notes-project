import React from 'react';
import './App.css';
import Header from './components/Navbar/navbar';
import Home from './components/Home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourNotes from './components/Notes/Notes';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';

function App() {
  
  return (
    <BrowserRouter>
      <Header title="iNotebook" />
      <Routes>
        <Route exact path="/" element={<Home />} />
      
        <Route exact path="/notes" element={<YourNotes />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

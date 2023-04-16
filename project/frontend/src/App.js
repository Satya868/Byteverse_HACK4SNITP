import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Footer from './component/MainView/Footer';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Policy from './pages/Footerpage/Policy';
import About from './pages/Footerpage/About';
import Contact from './pages/Footerpage/Contact';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Home from './pages/home/Home';
import Error from './pages/Error';
import AdminPage from './pages/Admin/AdminPage';
import Services from './pages/Services';
import CreateEmployee from './pages/Admin/CreateEmployee';

function App() {
  return (
    <>
    <header>
      <Homepage/>
    </header>
    <section>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/dashboard" element={<AdminPage/>}/>
        <Route path="/dashboard/create-employee" element={<CreateEmployee/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/service" element={<Services/>}/>
    
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;

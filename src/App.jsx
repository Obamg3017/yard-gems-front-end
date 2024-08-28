import React from 'react'
import NavBar from './components/Navbar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import GoogleMap from './components/Map/Map.jsx'

import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import About from './components/About/About.jsx'
import Profile from './components/Profile/Profile.jsx'


const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<GoogleMap/>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/item" element={<h1>Item</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

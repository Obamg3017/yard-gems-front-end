import React from 'react'
import NavBar from './components/Navbar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/map" element={<h1>Map</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

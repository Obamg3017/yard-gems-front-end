import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Profile from './components/Profile/Profile.jsx'



const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<h1>Map</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/item" element={<h1>Item</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

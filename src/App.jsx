import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import GoogleMap from './components/Map/Map.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Landing Page</h1>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/map" element={<GoogleMap/>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

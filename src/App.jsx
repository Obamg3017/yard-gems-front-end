import {  useState } from "react";
import NavBar from "./components/Navbar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GoogleMap from "./components/Map/Map.jsx";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import About from "./components/About/About.jsx";
import Profile from "./components/Profile/Profile.jsx";
import SignUp from "./components/Auth/SignUp/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import SignIn from "./components/Auth/SignIn/SignIn.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await verifyUser();
  //     user ? setUser(user) : setUser(null);
  //   };
  //   getUser();
  // }, []);

  return (
    <div className="container">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/map" element={<GoogleMap user={user} />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/item" element={<h1>Item</h1>} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
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
import { getUserFromToken, signOut } from "../Services/auth.js";
import { getUser } from "../Services/users.js";
import YardSaleForm from "./components/YardSale/YardSaleForm";
import Item from "./components/Item/Item.jsx";
import GetPin from "./components/GetPin/GetPin.jsx";


const App = () => {
  const [userFromToken, setUserFromToken] = useState(getUserFromToken());
  const [userObject, setUserObject] = useState(null);
  const [yardSale, setYardSale] = useState({
    yardOwner: "",
    name: "",
    lat: "",
    lng: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (userFromToken && userFromToken._id) {
        const user = await getUser(userFromToken._id);
        setUserObject(user.data);
      }
    };

    fetchUser();
  }, [userFromToken]);

  const handleSignout = async () => {
    await signOut(); // Ensure signOut completes before updating the state
    setUserFromToken(null);
    setUserObject(null);
  };

  const updateUserObject = async () => {
    if (userFromToken && userFromToken._id) {
      const user = await getUser(userFromToken._id);
      console.log('setting user object')
      setUserObject(user.data);
    }
  };


  return (
    <div className="container">
      <NavBar user={userFromToken} handleSignout={handleSignout} />
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/profile"
            element={<Profile userObject={userObject} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<GoogleMap user={userFromToken} />} />
          <Route
            path="/get-pin"
            element={
              <GetPin
                user={userFromToken}
                yardSale={yardSale}
                setYardSale={setYardSale}
              />
            }
          />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route
            path="/item"
            element={
              <Item userObject={userObject} setUserObject={setUserObject} />
            }
          />
          <Route
            path="/signin"
            element={<SignIn setUser={setUserFromToken} />}
          />
          <Route
            path="/signup"
            element={<SignUp setUser={setUserFromToken} />}
          />
          <Route
            path="/create-yard-sale"
            element={
              <YardSaleForm
                userId={userObject}
                yardSale={yardSale}
                setYardSale={setYardSale}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import NavBar from "./components/Navbar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GoogleMap from "./screens/Map/Map.jsx";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage.jsx";
import About from "./screens/About/About.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import SignUp from "./screens/Auth/SignUp/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import SignIn from "./screens/Auth/SignIn/SignIn.jsx";
import { getUserFromToken, signOut } from "../Services/auth.js";
import { getUser } from "../Services/users.js";
import YardSaleForm from "./screens/YardSaleForm/YardSaleForm.jsx";
import ItemForm from "./screens/ItemForm/ItemForm.jsx";
import GetPin from "./screens/GetPin/GetPin.jsx";
import DisplayYardSale from "./screens/DisplayYardSale/DisplayYardSale.jsx";

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
        // Set the yardOwner in yardSale state
        setYardSale((prevYardSale) => ({
          ...prevYardSale,
         
          yardOwner: user.data._id,
        }));
      }
    };

    fetchUser();
  }, [userFromToken]);

  const handleSignout = async () => {
    await signOut();
    setUserFromToken(null);
    setUserObject(null);
  };

  const updateUserObject = async () => {
    if (userFromToken && userFromToken._id) {
      const user = await getUser(userFromToken._id);
      console.log("setting user object");
      setUserObject(user.data);
    }
  };
console.log(userObject)
  return (
    <div className="container">
      <NavBar user={userFromToken} handleSignout={handleSignout} />
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/profile"
            element={
              <Profile userObject={userObject} setUserObject={setUserObject} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/map"
            element={
              <GoogleMap
                user={userFromToken}
                yardSale={yardSale}
                setYardSale={setYardSale}
              />
            }
          />
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
          <Route path="/yard-sale" element={<DisplayYardSale userObject={userObject} yardSale={yardSale}/>} />

          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route
            path="/item-form"
            element={
              <ItemForm userObject={userObject} setUserObject={setUserObject} />
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

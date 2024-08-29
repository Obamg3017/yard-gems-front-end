import {  useState, useEffect} from "react"
import NavBar from "./components/Navbar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import GoogleMap from "./components/Map/Map.jsx"

import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import About from "./components/About/About.jsx"
import Profile from "./components/Profile/Profile.jsx"
import SignUp from "./components/Auth/SignUp/SignUp.jsx"
import { Toaster } from "react-hot-toast"
import SignIn from "./components/Auth/SignIn/SignIn.jsx"
import { getUserFromToken, signOut } from "../Services/auth.js"
import { getUser } from "../Services/users.js"
import YardSaleForm from "./components/YardSale/YardSaleForm"
import Item from "./components/Item/Item.jsx"

const App = () => {
  const [userFromToken, setUserFromToken] = useState(getUserFromToken());
  const [userObject, setUserObject] = useState(null);

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
    await signOut();  // Ensure signOut completes before updating the state
    setUserFromToken(null);
    setUserObject(null);
  };


  return (
    <div className="container">
      <NavBar user={userFromToken} handleSignout={handleSignout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile user={userObject} />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<GoogleMap user={userFromToken} />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/items/:userId" element={<Item />} />
        <Route path="/signin" element={<SignIn setUser={setUserFromToken} />} />
        <Route path="/signup" element={<SignUp setUser={setUserFromToken} />} />
        <Route path="/create-yard-sale" element={<YardSaleForm userId={userObject} />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;

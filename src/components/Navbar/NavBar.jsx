import { Link } from "react-router-dom";
import { signOut } from "../../../Services/user";
import "./navbar.css";

const NavBar = ({ user, setUser }) => {
  const logout = async () => {
    try {
      const response = await signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <ul className="mainnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          {user ? (
            <button onClick={logout}>SignOut</button>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

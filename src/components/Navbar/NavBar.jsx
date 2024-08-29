import { Link } from "react-router-dom";
import { signOut } from "../../../Services/auth";
import "./navbar.css";

const NavBar = ({ user, handleSignout, setUser }) => {
  
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
        {user ? (
          <li>
            <Link to="" onClick={handleSignout}>
              SignOut
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signin">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

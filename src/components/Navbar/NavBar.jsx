import { Link } from "react-router-dom"
import "./navbar.css"


const NavBar = () => {
  return (
    <nav> 
      <ul className='mainnav'>
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
      </ul>
    </nav>
  );
};

export default NavBar

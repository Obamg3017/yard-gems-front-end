import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = ({ user, handleSignout }) => {
  return (
    <nav>
      <ul className="mainnav">
        {/* Container for the left-side links */}
        <div className="left-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>

          {user && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="" onClick={handleSignout}>
                  SignOut
                </Link>
              </li>
            </>
          )}
        </div>

        {/* Container for the right-side links */}
        {!user && (
          <div className="auth-link-container">
            <li>
              <Link to="/signin" className="auth-link">
                Signin
              </Link>
            </li>
            <li>
              <Link to="/signup" className="auth-link">
                SignUp
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

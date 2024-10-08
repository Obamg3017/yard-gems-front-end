import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = ({ user, handleSignout, isLandingPage }) => {
  return (
    <nav className={isLandingPage ? "navbar landing-page-nav" : "navbar"}>
      <ul className="mainnav">
        <div className="left-links">
          <li>
            <Link to="/">Home</Link>
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
            </>
          )}
        </div>
        {!user ? (
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
        ) : (
          <div className="auth-link-container">
            <li>
              <Link to="" onClick={handleSignout}>
                SignOut
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

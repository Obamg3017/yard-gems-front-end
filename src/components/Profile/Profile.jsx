import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = ({ userObject }) => {

  return (
    <div>
      <h1>Welcome To Yard 💎</h1>

      {/* Button that links to the Items page */}
      <Link to={"/item"}>
        <button>Create Item</button>
      </Link>

      <h3>Your Items</h3>
      {userObject?.items && userObject.items.length > 0 ? (
        <ul>
          {userObject.items.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong>: {item.description}
              {/* Button to add item to Yard Sale (functionality to be implemented) */}
              <button>Add to Yard Sale</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items added yet.</p>
      )}

      <h3>Yard Sales in Your Area</h3>
    </div>
  );
};

export default Profile;

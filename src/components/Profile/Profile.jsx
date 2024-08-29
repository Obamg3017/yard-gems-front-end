import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../../Services/items";
import "./profile.css"

const Profile = ({ userObject }) => {
  const [items, setItems] = useState([]);

  // Fetch the user's items when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const userItems = await getItems();
        // Filter items based on the userObject
        const filteredItems = userItems.filter((item) => item.owner === userObject);
        setItems(filteredItems);
        console.log(items)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [userObject]);

  return (
    <div>
      <h1>Welcome To Yard 💎</h1>

      {/* Button that links to the Items page */}
      <Link to={"/item"}>
        <button>Create Item</button>
      </Link>

      <h3>Your Items</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
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

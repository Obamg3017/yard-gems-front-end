import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import { getItems, deleteItem } from "../../../Services/items.js";

const Profile = ({ userObject }) => {
  const [itemList, setItemList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems(); // Fetch items using getItems

        if (items.error) {
          throw new Error(items.error);
        }

        setItemList(items); // Set the fetched items to state
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  console.log(userObject);

  const handleRemoveItem = async (itemId) => {
    try {
      const deletedItem = await deleteItem(userObject._id, itemId); // Delete item using deleteItem

      if (deletedItem.error) {
        throw new Error(deletedItem.error);
      }
      navigate(0);
      setItemList(itemList.filter((item) => item._id !== itemId)); // Update state to remove deleted item
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h1>Welcome To Yard 💎</h1>

      {/* Button that links to the Items page */}
      <Link to={"/item"}>
        <button>Create Item</button>
      </Link>
      <Link to={"/create-yard-sale"}>
        <button>Create Yard Sale</button>
      </Link>

      <h3>Your Items</h3>
      {itemList.length > 0 ? (
        <ul>
          {itemList.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong>: {item.description}
              {/* Button to add item to Yard Sale (functionality to be implemented) */}
              <button>Add to Yard Sale</button>
              {/* Button to delete the item */}
              <button onClick={() => handleRemoveItem(item._id)}>Delete</button>
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

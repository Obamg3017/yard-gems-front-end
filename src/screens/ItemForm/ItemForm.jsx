import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createItem } from "../../../Services/items.js";

const ItemForm = ({ userObject, setUserObject }) => {
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newItem = await createItem(itemData, userObject._id);
      console.log(itemData);
      // Update the userObject state
      setUserObject((prevState) => ({
        ...prevState,
        items: [...prevState.items, newItem],
      }));
      navigate("/profile");
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={itemData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={itemData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={itemData.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={itemData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </div>
  );
};

export default ItemForm;

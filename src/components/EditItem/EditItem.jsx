import { useState, useEffect } from "react";
import { getItem } from "../../../Services/items.js";
import { updateItem } from "../../../Services/items.js";

function EditItem({ item, userObject, setUserObject, setItemToEdit, handleDelete }) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const fetchedItem = await getItem(item._id);
        setItemData(fetchedItem.item);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItemData();
  }, [item._id]);

  if (!itemData) {
    return <p>Loading...</p>;
  }

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
      const newItem = await updateItem(userObject._id, itemData._id, itemData );
      console.log(itemData);
      // Update the userObject state
      setUserObject((prevState) => ({
        ...prevState,
        items: prevState.items.map((item) =>
          item._id === newItem._id ? newItem : item
        ),
      }));
      setItemToEdit(null)
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
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
        <button onClick={() => {handleDelete(item._id)}}>Delete</button>
      </form>
  );
}

export default EditItem;

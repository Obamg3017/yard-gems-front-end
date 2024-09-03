import { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { deleteItem } from "../../../Services/items";
import Item from "../../components/Item/Item";
import EditItem from "../../components/EditItem/EditItem";

const Profile = ({ userObject, setUserObject }) => {
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleRemoveItem = async (itemId) => {
    await deleteItem(userObject._id, itemId);

    setUserObject((prevState) => ({
      ...prevState,
      items: prevState.items.filter((item) => item._id !== itemId),
    }));
  };

  return (
    <div>
      <h1>Welcome To Yard 💎</h1>

      {/* Button that links to the Items page */}
      <Link to={"/item-form"}>
        <button>Create Item</button>
      </Link>
      <Link to={"/create-yard-sale"}>
        <button>Create Yard Sale</button>
      </Link>

      <h3>Your Items</h3>
      {userObject?.items ? (
        <ul>
          {userObject.items.map((item) => (
            <li key={item._id}>
              {itemToEdit === item._id ? (
                <EditItem
                  key={`edit-${item._id}`}
                  item={item}
                  userObject={userObject}
                  setUserObject={setUserObject}
                  setItemToEdit={setItemToEdit}
                  handleDelete={handleRemoveItem}
                />
              ) : (
                <Item
                  key={`item-${item._id}`}
                  item={item}
                  setItemToEdit={setItemToEdit}
                />
              )}
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

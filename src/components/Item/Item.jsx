import React, { useState } from 'react'
import { createItem } from '../../../Services/items.js'

const Item = ({ userId }) => {
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    owner: userId 
  });

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
      const response = await createItem(itemData)
      console.log('Item created:', response)
    } catch (error) {
      console.error('Error creating item:', error)
    }
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={itemData.name} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={itemData.description} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={itemData.price} onChange={handleInputChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={itemData.quantity} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Item




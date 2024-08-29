import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createYardSale } from '../../services/yard-sales'

const YardSaleForm = ({ userObject }) => {
  const [yardSale, setYardSale] = useState({
    name: '',
    latitude: '',
    longitude: '',
    startDate: '',
    endDate: ''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setYardSale({
      ...yardSale,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...yardSale,
        owner: userObject 
      };
      await createYardSale(userObject, data);
      navigate('/map') // Navigate to the map selection page after form submission
    } catch (error) {
      console.error("Failed to create yard sale:", error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Yard Sale Name:
        <input type="text" name="name" value={yardSale.name} onChange={handleChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={yardSale.startDate} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={yardSale.endDate} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YardSaleForm;

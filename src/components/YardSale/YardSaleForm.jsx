import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createYardSale } from "../../../Services/yard-sales";

const YardSaleForm = ({ userObject, yardSale, setYardSale }) => {

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYardSale({
      ...yardSale,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...yardSale,
        owner: userObject,
      };
      await createYardSale(userObject, data);
      navigate("/get-pin"); // Navigate to the map selection page after form submission
    } catch (error) {
      console.error("Failed to create yard sale:", error);
    }
  };

  return (
    <div style={{marginTop: '150px'}}>
      <form onSubmit={handleSubmit}>
        <label>
          Yard Sale Name:
          <input
            type="text"
            name="name"
            value={yardSale.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YardSaleForm;

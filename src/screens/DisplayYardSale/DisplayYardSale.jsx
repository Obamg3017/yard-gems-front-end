import React, { useState, useEffect } from "react";
import { getYardSale } from "../../../Services/yard-sales";

function DisplayYardSale({ userObject }) {
  console.log(userObject);
  if (!userObject || !userObject.yardSale) {
    return <div>No yard sale data found.</div>;
  }

  return (
    <div>
      <h1>Welcome To Yard 💎</h1>
      <h3>Your Items</h3>
      {/* Display yard sale data */}
      <h3>Yard Sales in Your Area</h3>
      <p>{userObject.yardSale.name}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default DisplayYardSale;

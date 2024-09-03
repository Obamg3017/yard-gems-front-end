import React, { useState, useEffect } from "react";
import { getYardSale } from "../../../Services/yard-sales";

function DisplayYardSale({ yardSale }) {
  const [yardSaleData, setYardSaleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYardSale = async () => {
      try {
        const data = await getYardSale(yardSale.yardOwner);
        console.log(data);
        setYardSaleData(data);
      } catch (error) {
        console.error("Failed to fetch yard sale data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchYardSale();
  }, [yardSale.yardOwner]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!yardSaleData) {
    return <div>No yard sale data found.</div>;
  }

  return (
    <div>
      <h1>Welcome To the {yardSaleData.yardSale.name} Yard Sale</h1>
      {yardSaleData?.yardSale.itemsForSale ? (
        <ul>
          {yardSaleData.yardSale.itemsForSale.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong> <br />${item.price}
              <br />
              {item.description}
              <br />
              Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items added yet.</p>
      )}
    </div>
  );
}

export default DisplayYardSale;

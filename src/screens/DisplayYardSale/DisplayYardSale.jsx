import React, { useState, useEffect } from 'react';
import { getYardSale } from '../../../Services/yard-sales';

function DisplayYardSale({ yardSale }) {
  const [yardSaleData, setYardSaleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYardSale = async () => {
      try {
        const data = await getYardSale(yardSale.yardOwner);
        setYardSaleData(data);
      } catch (error) {
        console.error('Failed to fetch yard sale data:', error);
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
      <h1>Welcome To Yard 💎</h1>
      <h3>Your Items</h3>
      {/* Display yard sale data */}
      <h3>Yard Sales in Your Area</h3>
      <p>{yardSaleData.name}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default DisplayYardSale;
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const YardSaleForm = ({ userObject, yardSale, setYardSale }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userObject && userObject._id) {
      setYardSale((prevYardSale) => ({
        ...prevYardSale,
        yardOwner: userObject._id,
      }));
    }
  }, [userObject, setYardSale]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setYardSale({
      ...yardSale,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/get-pin"); // Navigate to the map selection page after form submission
  };

  return (
    <div style={{ marginTop: "150px" }}>
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

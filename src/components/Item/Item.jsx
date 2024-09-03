function Item({ item, setItemToEdit }) {
  return (
    <>
      <strong>{item.name}</strong> <br />${item.price}
      <br />
      {item.description}
      <br />
      Quantity: {item.quantity}
      <br />
      <button>Add to Yard Sale</button>
      <button
        onClick={() => {
          setItemToEdit(item._id);
        }}
      >
        Edit
      </button>
    </>
  );
}

export default Item;

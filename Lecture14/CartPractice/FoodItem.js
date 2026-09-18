import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "./Slice2";

export default function FoodCard({ value }) {
  const dispatch = useDispatch();

  const cartItem = useSelector(state =>
    state.slice2.items.find(i => i.id === value.id)
  );

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#fff"
      }}
    >
      <h3>{value.food}</h3>
      <p>৳ {value.Price}</p>

      {cartItem ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => dispatch(removeItems(value.id))}>-</button>
          <span>{cartItem.qty}</span>
          <button onClick={() => dispatch(addItems(value))}>+</button>
        </div>
      ) : (
        <button onClick={() => dispatch(addItems(value))}>
          Add to Cart
        </button>
      )}
    </div>
  );
}


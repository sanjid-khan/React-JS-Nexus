import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "./Slice2";

export default function Cart({ setShowCart }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.slice2.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.qty * Number(item.Price),
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "350px",
        height: "100vh",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
        padding: "20px",
        zIndex: 1000
      }}
    >
      <h2>
        My Cart
        <button
          style={{ float: "right" }}
          onClick={() => setShowCart(false)}
        >
          ✕
        </button>
      </h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <div>
            <p>{item.food}</p>
            <small>৳ {item.Price}</small>
          </div>

          <div>
            <button onClick={() => dispatch(removeItems(item.id))}>-</button>
            <span style={{ margin: "0 8px" }}>{item.qty}</span>
            <button onClick={() => dispatch(addItems(item))}>+</button>
          </div>
        </div>
      ))}

      <hr />
      <h3>Total: ৳ {totalPrice}</h3>

      <button style={{ width: "100%", marginTop: "10px" }}>
        Checkout
      </button>
    </div>
  );
}

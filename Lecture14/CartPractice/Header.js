import { useSelector } from "react-redux";

export default function Header({ setShowCart }) {
  const totalCount = useSelector(state =>
    state.slice2.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        backgroundColor: "#ff5200",
        color: "#fff",
        position: "sticky",
        top: 0
      }}
    >
      <h2>Swiggy</h2>

      <h3
        style={{ cursor: "pointer" }}
        onClick={() => setShowCart(true)}
      >
        Cart 🛒 ({totalCount})
      </h3>
    </div>
  );
}



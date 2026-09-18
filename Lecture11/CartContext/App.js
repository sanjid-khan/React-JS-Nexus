import React from "react";
import { CartProvider } from "./CartContext";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  return (
    <CartProvider>
      <div>
        <h1>My Shop</h1>
        <Products />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Products = () => {
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  const products = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 50 },
    { id: 3, name: "Orange", price: 80 },
    { id: 4, name: "Mango", price: 150 },
    { id: 5, name: "Grapes", price: 120 },
    { id: 6, name: "Pineapple", price: 200 },
    { id: 7, name: "Strawberry", price: 180 },
    { id: 8, name: "Watermelon", price: 90 },
  ];

  const getItem = (id) => cart.find(item => item.id === id);

  return (
    <div>
      <h2>Products</h2>

      <div className="products">
        {products.map(product => {
          const item = getItem(product.id);

          return (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              {!item ? (
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              ) : (
                <div>
                  <button onClick={() => decreaseQty(product.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(product.id)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;


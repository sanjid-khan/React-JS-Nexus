import React from "react";
import ReactDOM from "react-dom/client";

//  Simple Component
function Header() {
  return <h1>Amar React App</h1>;
}

//  Arrow Function Component
const Footer = () => {
  return <p>Copyright 2024 - Sanjid Khan</p>;
};

//  Component er vitore multiple element
function UserCard() {
  return (
    <>
      <h2>Sanjid Khan</h2>
      <p>CSE Student</p>
      <p>Age: 21</p>
    </>
  );
}

//  JS variable use kora
function ProductCard() {
  const productName = "iPhone 15";
  const price = 120000;
  const available = true;

  return (
    <>
      <h2>{productName}</h2>
      <p>Price: {price} taka</p>
      <p>{available ? "Stock a ache" : "Stock a nai"}</p>
    </>
  );
}

//  Style use kora
function ColorBox() {
  const boxStyle = {
    backgroundColor: "tomato",
    color: "white",
    padding: "20px",
    fontSize: "24px",
  };

  return <div style={boxStyle}>Ami ekta colorful box!</div>;
}

//  Component er vitore Component
function App() {
  return (
    <>
      <Header />
      <UserCard />
      <ProductCard />
      <ColorBox />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
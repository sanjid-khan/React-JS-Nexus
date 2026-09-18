import React from "react";
import ReactDOM from "react-dom/client";

//   Simple Props
function Greet({ name, age }) {
  return (
    <>
      <h2>Ami {name}</h2>
      <p>Amar age {age} bochor</p>
      <hr />
    </>
  );
}

//  Product Card
function ProductCard({ productName, price, available }) {
  return (
    <>
      <h2>{productName}</h2>
      <p>Price: {price} taka</p>
      <p>{available ? "✅ Stock a ache" : "❌ Stock a nai"}</p>
      <hr />
    </>
  );
}

//  Student Card
function StudentCard({ name, department, cgpa }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Department: {department}</p>
      <p>CGPA: {cgpa}</p>
      <hr />
    </>
  );
}

//  Style Props
function ColorBox({ text, bgColor, textColor }) {
  const boxStyle = {
    backgroundColor: bgColor,
    color: textColor,
    padding: "20px",
    fontSize: "20px",
    marginBottom: "10px",
  };

  return <div style={boxStyle}>{text}</div>;
}

// 
function App() {
  return (
    <>
      
      <Greet name="Sanjid" age={21} />
      <Greet name="Nasim" age={24} />
      <Greet name="Sumon" age={22} />

     
      <ProductCard productName="iPhone 15" price={120000} available={true} />
      <ProductCard productName="Samsung S24" price={95000} available={false} />

    
      <StudentCard name="Sanjid Khan" department="CSE" cgpa={3.8} />
      <StudentCard name="Nasim Sheikh" department="EEE" cgpa={3.5} />

     
      <ColorBox text="Ami Red Box" bgColor="tomato" textColor="white" />
      <ColorBox text="Ami Blue Box" bgColor="steelblue" textColor="white" />
      <ColorBox text="Ami Green Box" bgColor="green" textColor="yellow" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// import React, {useEffect, useState} from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./component/Header";
// import Card from "./component/Card";
// import Footer from "./component/Footer";
// import arr from "./utils/dummy"
// import { greet as goa,meet as roa } from "./utils/dummy";



// function App(){


//     let [A,setA]=useState(arr);
//     let[search,setSearch]=useState("");

//     function SortByPrice(){
//           A.sort((a,b)=>a.price-b.price)
//           setA([...A]);
//     }

//     function priceAbove799(){

//         const B=arr.filter((value)=>value.price>799);
//         setA(B);

//     }

//     function discountAbove30(){

//         const C=arr.filter((val)=>val.discount>30);
//         setA(C);
//     }


//     function generateProduct(text) {
//     const filtered = arr.filter((item) =>
//       item.cloth.toLowerCase().includes(text.toLowerCase())
//     );
//     setA(filtered);
//   }

//   useEffect(() => {
//     generateProduct(search);
//   }, [search]); 

//     return(<> 
       
//          <Header/>

//         <button onClick={SortByPrice}>Sorting by price</button>
//         <button onClick={priceAbove799}>Price above 799</button>
//         <button onClick={discountAbove30}>Discount above 30</button>
//        <input  type="text"  placeholder="search by product name"  value={search} onChange={(e) => setSearch(e.target.value)}/>

//         <div className="middle" style={{display:'flex', gap:"20px", flexWrap:'wrap'}}>
//             {
               
//                 // A.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)
//                 // A.map((val,ind)=><Card key={ind} cloth={val.cloth} offer={val.Offer} price={val.price}/>)

//                 A.map((val,ind)=> <Card key={ind} cloth={val.cloth} offer={val.Offer} price={val.price} discount={val.discount}/>)
               
//             }
//         </div>
//         <Footer/>
//         </>
//     )
// }


// // [<Card/>,<Card/>, <Card/>, <Card/>, <Card/>]

// const Root= ReactDOM.createRoot(document.getElementById('root'));
// Root.render(<App/>);


// mutating method (sort, push, splice) → spread দরকার
// non-mutating method (filter, map) → spread দরকার নেই





//  ------------------------------ practice by own ------------------------



import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

function App() {

  
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState(false);
  const [discountFilter, setDiscountFilter] = useState(false);
  const [sortType, setSortType] = useState(null);

  
  const getProcessedProducts = () => {
    let updated = [...arr];


    
    if (search) {
      updated = updated.filter((item) =>
        item.cloth.toLowerCase().includes(search.toLowerCase())
      );
    }

    
    if (priceFilter) {
      updated = updated.filter((item) => item.price > 799);
    }

    
    if (discountFilter) {
      updated = updated.filter((item) => item.discount > 30);
    }

    
    if (sortType === "price") {
      updated.sort((a, b) => a.price - b.price);
    }

    return updated;
  };

  const products = getProcessedProducts();

  return (
    <>
      <Header />

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setSortType("price")}>
          Sort by Price
        </button>

        <button onClick={() => setPriceFilter(!priceFilter)}>
          Price above 799
        </button>

        <button onClick={() => setDiscountFilter(!discountFilter)}>
          Discount above 30
        </button>
      </div>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((item,ind) => (
          <Card
            key={ind}
            cloth={item.cloth}
            offer={item.Offer}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);





// বাটন ক্লিক → state change → React re-render → আবার function চলে → নতুন filtered data তৈরি → UI update

// getProcessedProducts() বাটন সরাসরি কল করছে না
//  এটা React নিজে থেকে চালাচ্ছে যখন state change হয়
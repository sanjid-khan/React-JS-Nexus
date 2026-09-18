import React from "react";
import ReactDOM from "react-dom/client"

// function Card(props){
//     return(
//         <div style={{border:"2px solid black", padding:"2px"}}>
//            <img src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q73840s.jpg?im=Resize,width=750" height="200px" width="200px"/>
//            <div style={{textAlign:"center"}}>
//              <h2>{props.cloth}</h2>
//              <h1>{props.offer}</h1>
//              <h2>Shop Now</h2>
//            </div>
//         </div>
//     )
// }



// with help of destructing

function Card({ cloth, offer }) {
  return (
    <div style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q73840s.jpg?im=Resize,width=750"
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{cloth}</h2>
        <h1>{offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}


const arr = [
  { cloth: "Tshirt", Offer: "20-40%Off" },
  { cloth: "Pant", Offer: "30-50%Off" },
  { cloth: "Shirt", Offer: "40-50%Off" },
  { cloth: "Shoes", Offer: "10-20%Off" },
  { cloth: "Jacket", Offer: "25-45%Off" },
  { cloth: "Jeans", Offer: "30-60%Off" },
  { cloth: "Socks", Offer: "10-30%Off" },
  { cloth: "Cap", Offer: "15-25%Off" },
  { cloth: "Sweater", Offer: "35-50%Off" },
  { cloth: "Shorts", Offer: "20-40%Off" },
  { cloth: "Hoodie", Offer: "30-50%Off" },
  { cloth: "Sandals", Offer: "10-20%Off" },
  { cloth: "Boots", Offer: "25-40%Off" },
  { cloth: "Scarf", Offer: "15-35%Off" },
  { cloth: "Gloves", Offer: "20-40%Off" },
  { cloth: "Dress", Offer: "30-50%Off" },
  { cloth: "Skirt", Offer: "25-45%Off" },
  { cloth: "Blazer", Offer: "35-55%Off" },
  { cloth: "Trousers", Offer: "30-50%Off" },
  { cloth: "Sneakers", Offer: "20-40%Off" }
];


function App(){
    return(
        // header
        // Body
        <div style={{display:'flex', gap:"20px", flexWrap:'wrap'}}>
            {
                
                arr.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.Offer}/>)

                // arr.map((value) => (<Card key={value.cloth} cloth={value.cloth} offer={value.Offer} />)

            }
        </div>
        // Footer
    )
}

// [<Card/>,<Card/>, <Card/>, <Card/>, <Card/>]

const Root= ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
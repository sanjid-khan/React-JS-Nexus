import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Colorful from "./Component/Colorful";

// Background color changer
// color = black
// re-render: Call the function again
// setColor("orange")
// useEffect hook

function Main(){

  const [count,setCount]=useState(0);

  return (
    <>
      <div className="counter"> 
      <h1>Counter is: {count}</h1>
      <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}} style={{backgroundColor:"red"}}>Decrement</button>
      </div>
      <Colorful name="sanjid"></Colorful>
    
    </>
    )
    
}



ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);


//  <Colorful></Colorful> vitorer ay function execute hocche (karon Basic JS function call)
//   <Colorful name="funny"></Colorful>  ay khane render hobe na karon value change hocche na
// <Colorful name={count}></Colorful>  kintu ay khane render hobe karon value change hocche
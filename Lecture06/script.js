import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"

function Counter(){
    
  // let count=0;

  let [count,setCount]=useState(0);

  function incrementnumber(){

    // count++;

    setCount(count++);
    
    // console.log("Count value is: ",count);
    // document.querySelector('h1').innerText=`Count is :${count}`;

  }

  function decrementnumber(){

    // count--;

    setCount(count--);

  //  console.log("Count value is: ",count);
  //  document.querySelector('h1').innerText=`Count is :${count}`;
  
  }

    return(
        <div className="first">
        <h1> Count is: {count}</h1>
        <button onClick={incrementnumber}>Increment {count}</button>
        <button onClick={decrementnumber}>Decrement {count}</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);








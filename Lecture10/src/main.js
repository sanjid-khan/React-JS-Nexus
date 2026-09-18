import React, { useState ,useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client"


// useMemo Hook
// 1: Counter button: increase
// 2: Input field: Fibonacci number
// 0 1 1 2 3 5 8 13 21 34
// Recursive calculate: Time complexity 2^n


// recursive function ay khane lekhle re-render hobe na

//  function Fibonacci(n){
//     if(n<=1)
//         return n;
//     return Fibonacci(n-1)+Fibonacci(n-2)
//  }



function App(){

    // Counter
     const [count, setCount]=useState(0);
     const [number,setNumber]=useState(0);
    //  const [result, setResult]=useState(null);

    const Fibonacci = (n) => {
       if (n <= 1) return n;
       return Fibonacci(n - 1) + Fibonacci(n - 2);
    };

     const result= useMemo(()=>Fibonacci(number),[number]);
    //   const result= useMemo(()=>Fibonacci(number),[number]); 

    //   useEffect(()=>{
    //    setNumber(Fibonacci(number));
    //   },[number]);

    return( <>
         <h1>Counter is: {count}</h1>
  <button onClick={()=>setCount(count+1)}>Increment</button>
  <button onClick={()=>setCount(count-1)}>Decrement</button>

    <div>
        <h2>Fibonacci is:{result}</h2>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    </div>

        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
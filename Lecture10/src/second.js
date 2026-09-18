import React, { useState ,useMemo, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom/client"


// function App(){

//     const[count,setCount]=useState(0);
//     const money= useRef(0);

    // console.log(money.current);
    // karon ta hocche object er part

//     return(
//         <>
//         <h1>Counter is: {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>

//         <h1>Money is: {money.current}</h1>
//         <button onClick={()=>{
//              money.current=money.current+1;
//              console.log(money.current);
//             }}>Increment</button>
//         </>
//     )
    
// }


function StopWatch(){

    const [time,setTime]=useState(0);
    const[isRunning,setIsRunning]=useState(false);
    const intervalRef=useRef(null);

    function start(){
        if(!isRunning){ 
      intervalRef.current= setInterval(()=>{
        setTime((prevtime)=>prevtime+1);
       },1000)
       setIsRunning(true);
      }
    }
    
    function stop(){
        if(isRunning){ 
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setIsRunning(false);
     }
   }
    
    function reset(){
      clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0);
    }


    return (
        <>
         <h1>StopWatch is: {time}</h1>
         <button onClick={start}>Start</button>
         <br></br>
         <br></br>
         <button onClick={stop}>Stop</button>
         <br></br>
         <br></br>
         <button onClick={reset}>Reset</button>
         <br></br>
         <br></br>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>)





// clearInterval(intervalRef.current)
// 👉 timer বন্ধ
// intervalRef.current = null
// 👉 cleanup (good practice)
// setIsRunning(false)
// 👉 state update
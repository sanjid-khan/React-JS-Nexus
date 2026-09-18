import React, { useState ,useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client"
import Incremenet from "./Increment";
import Decrement from "./Decrement";

function App(){
    
    const[count,setCount]=useState(0);

    return(
        <>
         <h1>Hello Coder Army</h1>
         <Incremenet counts={count} setCounts={setCount}/> 
         <Decrement  counts={count} setCounts={setCount}/>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)


// --------- State Lifiting----------
// যদি একই state দুই বা তার বেশি component-এ দরকার, state parent-এ উঠাও।
// Child component-কে props দিয়ে state ও updater function পাঠাও।
// এটা React-এর single source of truth principle কে maintain করে।
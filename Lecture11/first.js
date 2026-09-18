import React, { useState ,useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Second from "./second";
import GlobalContext from "./Global";
import { useContext } from "react";
import Fifth from "./fifth";

function App(){
    
    const[count,setCount]=useState(10);

    return(
        <>
         {/* <Fifth></Fifth> */}
         <GlobalContext.Provider value={{count,setCount}}> 
         <h1>Hello Coder Army</h1>
         <Second/> 
         </GlobalContext.Provider>
        </>
    )
}


// First create a create Context
// Provide  data ko uske andar: Descendent
// Consume the context

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)




{/* <GlobalContext.Provider
  value={{
    count,
    setCount,
    name: "Sanjid",
    skills: ["JS", "React"],
    isLoggedIn: true
  }}
> */}

// const { count, setCount, name, skills, isLoggedIn } = useContext(GlobalContext);


// Context API can pass any JavaScript data type,
// but we usually pass an object to manage multiple states and functions globally.
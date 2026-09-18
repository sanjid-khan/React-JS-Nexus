import { useState } from "react"
import { useDispatch } from "react-redux"
// import { Decrement, Increment,Reset, CustomIncreaser } from "./Slicer1";
import { CustomIncreaser } from "./Slicer1";

export default function CustomCounter(){
       
     const[number,setNumber]=useState("")
     const  dispatch=useDispatch();

     function handleClick(){
        dispatch(CustomIncreaser (Number(number)));
        setNumber("");
     }

    // {type: "slice1/CustomIncreaser", payload: 10}

    return(
        <>
         <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
         <button onClick={handleClick}>Submit</button>
        </>
    )
}






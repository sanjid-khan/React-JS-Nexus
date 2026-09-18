import GlobalContext from "./Global"
import { useContext } from "react"
import Third from "./third";


export default function Second(){

    // const {count,setCount}= useContext(GlobalContext);

    const {count,setCount}=useContext(GlobalContext);

    return(
        <>
         <h2>Kaise hai ab sab lok {count} </h2>
         <Third/>
        </>
    )
}



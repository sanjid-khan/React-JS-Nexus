import React,{ useState, useEffect } from "react";

function  Colorful(){

const [color,setColor]= useState("black");


 console.log('first');

//    useEffect (Callback Function, dependency)
   useEffect(()=>{
        console.log("UseEffect Executed");
        document.body.style.backgroundColor=color;
   },[color]);  

 console.log('second');

  // document.body.style.backgroundColor = color;

    
    return(
        <>
         <h1>Background Color Changer</h1>
         <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
         </div>
        </>
    )

}


// export default (Colorful);

export default React.memo(Colorful);





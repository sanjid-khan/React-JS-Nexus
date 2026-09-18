import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){

    const [Password, setPassword] = useState("");
    const [Length, setLength] = useState(10); 
    const [numberChanged, setnumberChanged]=useState(false);
    const [charChanged, setcharChanged]=useState(false);


    const generatepassword= useCallback(()=>{
          
       let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="0123456789";
        if(charChanged) 
            str+="+-)(*!@#$%^&{}";

        let pass= ""

        for (let i=0; i<Length;i++)
        {
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);

   },[Length,numberChanged,charChanged]);


    //    ay khane generatepassword() function khula rekhe dile infinite loop a chole jabe
   //    karon setPassword() er jonno full component re-render hoy (generatepassword()) again call
   //    ay karone useEffect use kora hoyche ay khane


    useEffect(()=>{
        generatepassword();
    },[generatepassword]);


    // useEffect(()=>{
    //      generatepassword()
    // },[Length,numberChanged,charChanged])


    return(
        <>
         <h1>{Password}</h1>
         <div className="second">
            <input type="range" min={5} max={50} value={Length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length({Length})</label>

            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
            <label>Character</label>

         </div>

        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PasswordGenerator/>);



// useCallback → function reference optimize করে

// useCallback এখানে ব্যবহার করা হয়েছে generatepassword function কে stable রাখতে,
//  যাতে useEffect অপ্রয়োজনে বা infinite ভাবে execute না হয়।



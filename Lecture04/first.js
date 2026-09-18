import React from "react";
import ReactDOM from "react-dom/client"

// const element= <h1>Hello Coder Army</h1>

// JSX: JS Expression (output laake de: Result produce)
// JSX: Statement( unko aap nahi likh sakte)
// সহজ rule — {} এর ভেতরে শুধু এমন কিছু লেখো যেটা একটা value দেয়


// props hocche arguement pass korle seta catch kore as a object
// aykhane props hocche object .... props er nam jei kono kichu deuya jabe
// props a ay vabe ashbe (nicher way te)
props={
    name:"Rohit Negi",
    age:"23"
}


// Result produce hona chahiye: string, number, array
function Greet(props) {
    return <h2>Hello Hello Bhaiya Ji {props.name}  {props.age}</h2>
}

const element2=<Greet name="Rohit Negi" age="23"/>

// const element3= <h1 id="first" className="second"></h1>


// <Greet/>: Function call
// <div> <h1> <ul> 
// const Root= ReactDOM.createRoot(document.getElementById('root'));
// Root.render(element2);


function Meet(props){
   return <h1> My name is {props.name}. My age is {props.age} </h1>
}

const element=<Meet name="Nasim Sheikh" age="25"/>

// const Root=ReactDOM.createRoot(document.getElementById('root'));
// Root.render(element);


// Props read-only
//directly modify  করা যাবে না
// change করতে হলে state ব্যবহার করতে হবে



// Props internally কী হয়?
// <Welcome name="Sanjid" age={22} />

// ⬇️ React internally:

// Welcome({ name: "Sanjid", age: 22 })

// 👉 Component = normal JS function
import React from "react";
import ReactDOM from "react-dom/client"

// const element= React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello Coder Army");
// const element2= React.createElement("h2",{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"Maja aaya Muje");

//            React                                Render
// React.createElement() => react element(JSObject) => HTML Element


// React.createElement('h1',{},"Hello Coder Army");

// const newElement= <h1>Hello Coder Army</h1>;


//   babel:                     React                       Render
// JSX=> React.createElement() => react element(JSObject) => HTML Element



// const newElement=<h1>Hello Coder Army</h1>
// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);


// *****************************************************************


// JSX: JS ke expression
// JSX : Javascript  XML: HTML code direct js ke andar likh sakte ho

const name="Sanjid khan";

const obj={
    dept:"CSE",
    id:216
}

const obj2={
    backgroundColor:"black",
    color:"red",
    fontSize:"30px"
}

const obj3={
    backgroundColor:"black",
    color:"red",
    fontSize:"30px"
}


const element=(
  <>
  <h3>My name is {name}</h3>
  <h1 id="first" className="second">I am Studying at{obj.dept}</h1>
  <h2 style={obj2}>My Id is {obj.id}</h2>
  <h1 style={obj3}> I want to be a good coder</h1>
  </>
)

 const Reactroot0=ReactDOM.createRoot(document.getElementById('root'));
 Reactroot0.render(element);

 

// React Component
// function Based Componend

function Greet(){
    return <h1>Aur bhai kaisa hai</h1>
};

const Meet=()=>{
  return <h2>Mera Sab achaa hai</h2>
}


const newElement2=Greet();

const newElement3=Meet();

// const newElement4=<>{newElement2} {newElement3}</>
const newElement4=<>{Greet()} {Meet()}</>


const Reactroot= ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement2);
Reactroot.render(newElement3);
Reactroot.render(Meet());
Reactroot.render(newElement4);

 



function Sanjid() {
  return <h2>Ami Sanjid khan. CSE student</h2>;
}

function Nasim() {
  return <h2>Ami Nasim sheikh.I am a Businessman</h2>;
}

const Sumon = () => {
  return <h2>Ami Sumon, guraguri korte onk vlo lage amar</h2>;
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Sanjid />
    <Nasim />
    <Sumon />
  </>
);



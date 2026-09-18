const element= React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello Coder Army");
const element2= React.createElement("h2",{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"Maja aaya Muje");
// ReactDOM.render(element,document.getElementById('root'));
const div1=React.createElement('div',{},[element,element2]);
const Reactroot= ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
// Reactroot.render(element);
// Reactroot.render(element2);
Reactroot.render(div1);



//  <div>
//     <h1>Hello Coder Army</h1>
//     <h2>Maja aaya muje</h2>
// </div> 


{/* <div>
    <div>
        <h1>
            <p>Aur bhai kaisa hai</p>
        </h1>
    </div>
</div> */}

// JSX
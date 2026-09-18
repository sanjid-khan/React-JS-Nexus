// Create element through JS

// const header1=document.createElement('h1');
// header1.innerText="Hello Coder Army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2=document.createElement('h1');
// header2.innerText="Kaise ho aap sab log";
// header2.style.backgroundColor="black";
// header2.style.fontSize="30px";
// header2.style.color="white";



// const root=document.getElementById("root");
// root.append(header1);
// root.append(header2);


// ***********************************************************************************************

// React: Object
// ReactDOM: Object

// styles= {fontSize:"30px",backgroundColor:"blue",color:"white"}


const React={

    createElement : function(tag,styles,children){
      const element= document.createElement(tag);

      // aykhane array  check kora hoccce. 
      // tar por loop calaiya append kora hocche element a
      
      if(Array.isArray(children))
        {
         for(let val of children)
            element.append(val);
        } 
        else if (children != null) 
          {
         element.innerText = children;
          }


      for(let key in styles)
        {
        element.style[key]=styles[key];
        }

       // element.style[key]=element.style.fontSize

      return element;
    }
}

const ReactDOM={
    render: function(element,root){
        root.append(element);
    }
}


const header1=React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello Coder Army");
const header2=React.createElement('h1',{fontSize:"25px",backgroundColor:"black",color:"white"},"Kaise ho aap sab log");


 const li1=React.createElement('li',{},"HTML");
 const li2=React.createElement('li',{},"CSS");
 const li3=React.createElement('li',{},"JS");

 const ul=React.createElement('ul',{fontSize:"30px",backgroundColor:"blue",color:"white"},[li1,li2,li3]);


ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(ul,document.getElementById('root'));

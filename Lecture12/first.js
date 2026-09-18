import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route, Link } from "react-router";
import Contact from "./src/contact";
import Home from "./src/home";
import Dashboard from "./src/dashboard";
import Details from "./src/details";
import Zero from "./src/zero";
import Hello from "./src/hello";
import Hi from "./src/hi";
import HelloOne from "./src/helloone";
import HelloTwo from "./src/hellotwo";

function App(){

    return(
        <BrowserRouter>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
             <Link to="/Details">Details</Link>
          </nav>

         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Details" element={<Details></Details>}>

            <Route index element={<Zero></Zero>}></Route>
             <Route path="Hello" element={<Hello></Hello>}></Route>
             <Route path="Hi" element={<Hi></Hi>}></Route>

            </Route>
         </Routes>
        </BrowserRouter>

    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)



// ********************************************************************
// ---------Practice nije nije---------


//   function App(){

//     return(
//         <BrowserRouter>
        
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/Contact">Contact</Link>
//             <Link to="/Dashboard">Dashboard</Link>
//             <Link to="/Details">Details</Link>
//         </nav>

//         <Routes>
//             <Route path="/" element={<Contact></Contact>}></Route>
//             <Route path="/Contact" element={<Contact></Contact>}></Route>
//             <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
//             <Route path="/Details" element={<Details></Details>}>
            
//             <Route index element={<Zero></Zero>}></Route>

//             <Route path="Hello" element={<Hello></Hello>}>
//              <Route path="one" element={<HelloOne></HelloOne>} />
//              <Route path="two" element={<HelloTwo></HelloTwo>} />
//             </Route>

//             <Route path="Hi" element={<Hi></Hi>}></Route>
            
//             </Route>
//         </Routes>
//         </BrowserRouter>
//      )
//   }

// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)



// <Route path="Hello" element={<Hello></Hello>}></Route>
// ay khane "/Hello" deuya hoy nai karon / dile root level theke khujbe
// ay jonno "Hello" karon relative path

// React ata amn kore dicche 
// Details
//  ├─ index   → /Details
//  ├─ Hello   → /Details/Hello
//  └─ Hi      → /Details/Hi



// Outlet না দিলে Nested Route কেন কাজ করে না?
// কারণ:
// React Router জানে কোন component render করতে হবে
// কিন্তু জানে না কোথায় render করবে
// 📌 <Outlet /> সেই জায়গা define করে



// Nested route থাকলে Outlet MUST
// Outlet ছাড়া child route = invisible
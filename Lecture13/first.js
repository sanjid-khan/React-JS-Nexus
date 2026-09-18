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
import GitHub from "./Github";

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
            {/* <Route path="/Github/:name" element={<GitHub></GitHub>}></Route> */}
           <Route path="/Github/:name" element={<GitHub></GitHub>}></Route>
         </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
import { createContext } from "react";

const GlobalContext= createContext("sanjid khan");

export default GlobalContext;



// const GlobalContext = createContext(defaultValue);
// const UserContext = createContext("sanjid khan");
// const ThemeContext = createContext("light");

// GlobalContext hocche ekta object

// GlobalContext = নাম → তুমি চাইলে অন্য নাম দিতে পারো, যেমন MyContext।
// কিন্তু নাম descriptive হলে project-এর জন্য সুবিধা হয়।
// "sanjid khan" হলো default value, সেটাও তোমার requirement অনুযায়ী change করতে পারো।



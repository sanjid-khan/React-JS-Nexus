import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import stores from "./stores";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";

function App(){

    return(
       <Provider store={stores}>
        <CoinCreate></CoinCreate>
       </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// function Fetchuser(){
      
//     useEffect(async ()=>{

//         dispatch(Loading(true));
//          try{ 
//          const response= await fetch ("Github User Information");
//          const data = await response.json();
//           dispatch(UpdateData(da));
//          }
        
//          catch (error){ 
//          dispatch(ErrorData("Error Occured"));
//          }

//     })
// }

// Object: {type: 'slice/LoadingData', payload:true}
// {type: 'slice/UpdateData', payload:da}
// {type: 'slice/ErrorData', payload:"Error Occured"}




// Ek aur koi component ho, usko bhi fetch request:
// ay khane locally fetch kora hocche
// ay khane multiple component er jonno alada alada fetch korte hobe
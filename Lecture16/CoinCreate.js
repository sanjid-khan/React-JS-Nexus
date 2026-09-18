import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import ConiCard from "./CoinCard";

export default function CoinCreate (){

   const dispatch=useDispatch();

   const {data,loading,error}= useSelector((state)=>state.slice1)

    useEffect(()=>{
       dispatch(FetchData(20));
    },[])

    // Display information of 20 user
    if(loading){
        return <h1> Data is Loading</h1>
    }

    if(error){
        return <h1>Error has Occured</h1>
    }

    return (
    <>
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
        {data.map((value)=><ConiCard key={value.id} coin={value}></ConiCard>)}
        
      </div>
    </>
 )

}



// FetchData কী?
// const FetchData = createAsyncThunk(...)

// 👉 এটা একটা function
// 👉 যেটা parameter নেয় (20)

// FetchData(20)


// FetchData(20) কী?

// 👉 এটা একটা action object তৈরি করে
// যেটা dispatch করা যায়:

// dispatch(FetchData(20))


// Component
//    ↓
// dispatch(FetchData(20))   ← তুমি করছো
//    ↓
// createAsyncThunk চালু
//    ↓
// pending auto dispatch
//    ↓
// API call
//    ↓
// fulfilled / rejected auto dispatch


// Outside dispatch → Start
// 👉 Inside dispatch → Control flow
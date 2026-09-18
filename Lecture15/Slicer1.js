// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     count:0
// }
// initialState ke ay vabeu store kora jai

// const initialState={count:0}

// Original Object: Draft(Duplicate Object): Update maarega
// {count:0}            {count:1}               {count:1}  

                //    Draft:1
// Immer: New Draft create karta hai:
// New object return karo poora || Draft diya hai usko update



// const initialState={count:0}


// **************************************************

import {createSlice} from "@reduxjs/toolkit";

const reactslicer=createSlice({
   name:"slice1",
   initialState: {count:0},
   reducers:{
      Increment: (state)=> {state.count=state.count+1},
      Decrement: (state)=> {state.count=state.count-1},
      Reset: (state)=> {state.count=0},
      CustomIncreaser: (state,action)=> {state.count+=action.payload}
   }
})

export const{Increment,Decrement,Reset,CustomIncreaser}=reactslicer.actions
export default reactslicer.reducer;





// payload কী?
// payload = action এর সাথে পাঠানো ডাটা
// উদাহরণ 👇
// dispatch(addByAmount(5))
// Action object হবে:

// {
//   type: "slice1/addByAmount",
//   payload: 5
// }

// Reducer এ ব্যবহার:
// addByAmount: (state, action) => {
//   state.value += action.payload
// }
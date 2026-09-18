import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "./Slicer1";

export default function Counting(){
      
   const count= useSelector((state)=>state.slice1.count);
//    subscribing to the event
   const dispatch = useDispatch();

//    console.log(Increment());

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}



// dispatch হচ্ছে একটা ফাংশন
// ➡️ কাজ: store-এ action পাঠানো

// type কী?
// type হলো action এর নাম / পরিচয়
// type: "slice1/Increment"
// Reducer এই type দেখে বুঝে:
// “কোন কাজটা করবো?”


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


// 8️⃣ সহজ মনে রাখার ট্রিক 🧠
// dispatch → পাঠায়
// action → কী করতে হবে বলে
// type → কাজের নাম
// payload → কাজের ডাটা
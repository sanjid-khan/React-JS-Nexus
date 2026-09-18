import { useState } from "react";
import FoodCard from "./FoodItem";

const foodItems = [
  { id: 1, food: 'Pizza', Price: "200" },
  { id: 2, food: 'Burger', Price: "120" },
  { id: 3, food: 'Pasta', Price: "150" },
  { id: 4, food: 'Sandwich', Price: "100" },
  { id: 5, food: 'Fries', Price: "80" },
  { id: 6, food: 'Salad', Price: "90" },
  { id: 7, food: 'Sushi', Price: "250" },
  { id: 8, food: 'Steak', Price: "400" },
  { id: 9, food: 'Ice Cream', Price: "70" },
  { id: 10, food: 'Donut', Price: "60" },
];


export default function Card(){


    return(
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"20px"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id}>  <FoodCard value={value}></FoodCard>   </div>
                )
            })}
         </div>
    )
}




  
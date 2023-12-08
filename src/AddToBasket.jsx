import { useState } from "react";
export default function AddToBasket({setBasket}){
    const handleClick =() => {
        console.log(setBasket);
    }
return (
    <>
    
    <button onClick={handleClick}>Add</button>
    </>
)
}
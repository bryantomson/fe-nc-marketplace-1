import { Link } from "react-router-dom";
import { postItems } from "./api";
import SuccessSoldItem from "./SuccessSoldItem";
import UnsuccessSoldItem from "./UnsuccessSoldItem";
import { useState } from "react";
export default function SellItem() {
 const [submitted, setSubmitted] = useState(false)
 const [error, setError] = useState(null)
    function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const body = {};
        for (const [key, value] of form.entries()) {
            body[key] = value;
        }
        postItems(body).then((res)=>{
            console.log(res, '<---');
            setSubmitted(true)
        }).catch((err) => {
            setError(err)
        })
        // Do Further input validation and submit the form
    }
    if(error){
        return <UnsuccessSoldItem/>
    } else if(!submitted) {
        return (
        <>
        <h1>Sell an Item!</h1>
        <form onSubmit={handleSubmit}>
        <ul>
            <li><label className='input-label' htmlFor="item-name">Item Name</label>
            <input id='item-name' name='item_name' type='text' className='item-name-input'></input></li>
            <li><label className='input-label' htmlFor="item-description">Item Description</label>
            <input id='item-description' name='description' type='text' className='item-description-input'></input></li>
            <li><label className='input-label' htmlFor="item-price">Item Price</label>
            <input id='item-price' name='price' type='text' className='item-price-input'></input></li>
            <li><label className='input-label' htmlFor="item-image">Item Image Link</label>
            <input id='item-image' name='img_url' type='url' className='item-image-input'></input></li>
                <li><label for="categories">Choose a category:</label>
                <select id="categories" name="category_name">
                    <option selected disabled value="select-category">-</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Household">Household</option>
                    <option value="Clothing">Clothing</option>
                </select></li>
            </ul>
            
            <button type="submit">List an Item</button>

        </form>
        </>
    )
    }
    return(
        <SuccessSoldItem/>
    )
}
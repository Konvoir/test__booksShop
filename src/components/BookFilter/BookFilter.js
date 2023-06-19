import React from "react";
import './BookFilter.scss';

const BookFilter = ({filterBooks}) => {
    const onSelectChange = (e) =>{
            filterBooks(e.target.value)
    }
    return (
        <div className="book__filter">
            <select onChange={onSelectChange}>
                <option value="animals">animals</option>
                <option value="tourizm">tourizm</option>
                <option value="food">food</option>
                <option value="music">music</option>
            </select>
        </div>
    )
}

export default BookFilter
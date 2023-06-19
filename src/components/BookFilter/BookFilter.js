import React from "react";
import './BookFilter.scss';
import arrowUp from '../../assets/up-arrow.svg';
import arrowDown from '../../assets/down__arrow.svg';

const BookFilter = ({filterBooks, sortBooks}) => {
    const onSelectChange = (e) =>{
            filterBooks(e.target.value)
    }
    return (
        <div className="book__filter">
            <div>
                <p onClick={() => sortBooks()} >orderBy</p><img className="arrow" src={arrowDown} color="black" alt="arrowUp" />
            </div>
            
            <div>
                <select onChange={onSelectChange}>
                    <option value="animals">animals</option>
                    <option value="tourizm">tourizm</option>
                    <option value="food">food</option>
                    <option value="music">music</option>
                </select>
            </div>
        </div>
    )
}

export default BookFilter
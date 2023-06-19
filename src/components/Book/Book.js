import React from "react";
import './Book.scss';

const Book = ({book, totalPrice}) => {
    return (
        <div className="book">
            <div className="book__body">
                <div className="book__column" onClick={() => totalPrice(book)}>
                <div className="book__number">
                {book.id}
                </div>
                <div className="book__name">
                {book.name}
                </div>
                </div>
                <div className="book__column">
                <div className="book__price">
                <b>{book.price} $</b>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Book
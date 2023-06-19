import React from "react";
import './Cart.scss';

const Cart = ({orderPrice}) => {
    return (
        <div>
            <p>Total price</p><p>{orderPrice}</p>
        </div>
    )
}
export default Cart
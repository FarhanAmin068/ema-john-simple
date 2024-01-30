/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;//Destructuring of object
    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax=totalPrice*7/100;
    const grandTotal=totalPrice+totalShipping+tax;
    // total 7% tax dhore
    return (
        <div className='cart'>
            <h4>Order summary</h4>
        <p>Selected Items:{cart.length}</p>
        {/* Jehutu amra egula further use krbo tai alada cart component banai 
        rakhbo */}
        <p>Total Price:${ totalPrice} </p>
        <p>Total Shipping:${totalShipping} </p>
        <p>Tax:${tax.toFixed(2)} </p>
        <h4>Grand Total:{grandTotal} </h4>
        </div>
    );
};
/* How to add array of object values
const cart=[{price:24},{price:20},{price:12}]
let total=0;
for(const product of cart){
  total=total+product.price;
}
*/
export default Cart;
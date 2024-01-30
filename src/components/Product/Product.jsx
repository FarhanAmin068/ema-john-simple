/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
     const{img,name,seller,ratings,price}=props.product;

     const handleAddToCart=props.handleAddToCart;
    //  eta amra shop theke props call kore object ta ni ashlam
    //erpr eta event handler e usr kebo
    return (
        <div className='product'>
            <img src={img} alt="" />
            
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} 
            className='btn-cart'>Add to cart 
             <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;
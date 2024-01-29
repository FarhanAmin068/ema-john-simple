/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const[cart,setCart]=useState([]);
//   this useState is for pushing product to the cart
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart=(product)=>{
     //cart.push(product);
     //jodi normal java script hoto uporer line use kore product cart e push kora jeto

     //if we use react we need to utilize setCart for pushing the product
     const newCart=[...cart,product];
     //uporer line dara bujano hocche ami jodi add to cart e press kori tahole
     //ager cart er array te notun product add hbe 
     //basic syntax => const arr2=[...arr1,newElement]
     setCart(newCart);

    }

  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h2>Products Coming here:{products.length}</h2> */}
        {products.map((product) => (
          <Product key={product.id} product={product}
          handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order summary</h4>
        <p>Selected Items:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;

import React from 'react';
import './Product.css';


const Product = (props) => {
   
   const {name,img,price,stock,seller,ratings} = props.product;
  

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'> Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Rating: {ratings} stars</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Stock: {stock}</small></p>
            </div>
           <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
            <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({product, handleAddToCart}) => {
 //const {product, handleAddToCart} =props;
   const {name,img,price,stock,seller,ratings} = product;
  

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
           <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name,price,img,seller,ratings} = props.product;
    
    return (
        <div className="product-card">
            <div className="p-img">
                <img src={img} alt="" />
            </div>
            <div className="p-details">
                <h2 className="p-name">{name}</h2>
                <h3 className="price">Price: ${price}</h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)}>
                <span>Add to Cart </span>
                <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-page'>
            <div className="products-area">
                <h1>Products</h1>
                <div className="product-list">
                {
                    products.map(product => 
                    <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                </div>
            </div>
            <div className="orders">
                <h3>Order Summary</h3>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
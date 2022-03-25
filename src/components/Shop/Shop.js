import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, [])

    const addToCart = myproduct => {
        console.log(myproduct)
        // cons//ole.log(id)

        const newCart = [...carts, myproduct]
        setCarts(newCart)
        console.log(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>hello from cart</h1>
            </div>

        </div>
    );
};

export default Shop;
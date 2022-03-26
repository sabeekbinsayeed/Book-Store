import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, [])

    const randomNumberGenerate = () => {
        const id = Math.floor((Math.random() * 9) + 1);
        console.log(typeof id)
        const text = id.toString();
        return text;
    }
    const handleDelete = () => {
        if (carts.length > 0) {
            let id = randomNumberGenerate();

            console.log(id)
            const exist = carts.find(cart => cart.id === id)
            console.log(exist)
            if (exist) {
                const selectedProduct = carts.filter(product => product.id === id)
                setCarts(selectedProduct)
            }
            else {
                handleDelete();
            }


        }

        else {
            alert('no products exist, at first buy some')
        }

    }

    const handleRemoveAll = () => {
        setCarts([])
    }
    const addToCart = myproduct => {
        console.log(myproduct)
        // cons//ole.log(id)
        const exist = carts.find(product => product.id === myproduct.id)
        console.log(exist)
        if (exist) {
            alert("This product has already been added!!");
        }
        else {
            const newCart = [...carts, myproduct]
            setCarts(newCart)
            console.log(newCart)

        }


    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Products added {carts.length}</h1>
                {
                    carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
                }
                <button onClick={() => handleDelete()}>chose me</button>
                <button onClick={() => handleRemoveAll()}> clear</button>
            </div>

        </div>
    );
};

export default Shop;
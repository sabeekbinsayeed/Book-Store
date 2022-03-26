import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //console.log(props)

    const { name, img, price, id } = props.product



    return (
        <div>
            <img src={img}></img>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <button className='cart-button' onClick={() => { props.addToCart(props.product) }}><p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>

        </div>
    );
};

export default Product;
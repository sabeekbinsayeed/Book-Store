import React from 'react';

const Product = (props) => {
    //console.log(props)

    const { name, img, price, id } = props.product



    return (
        <div>
            <img src={img}></img>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <button onClick={() => { props.addToCart(props.product) }}><p>Add to Cart</p></button>

        </div>
    );
};

export default Product;
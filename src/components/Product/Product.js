import React from 'react';

const Product = (props) => {
    const { name, img, price, id } = props.product
    return (
        <div>
            <img src={img}></img>
            <h1>{name}</h1>

        </div>
    );
};

export default Product;
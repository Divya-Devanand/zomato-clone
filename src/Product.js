import React from 'react'
import "./Product.css";


function Product({ name, type, rating, area, img, id }) {
    return (
        // <Link to="/product">
        <a href={`/product/${id}` } class="product-link">
            <div className="product">
            <div className="product-pic">
                <img className="product-image" src={img} alt=""/>
            </div>
            <div className="product-contents">
            <div className="product-name">
                <p>{name}</p>
            </div>
            <div className="product-rating">
                <p>{rating}</p>
            </div>
            <div className="product-area">
                <p>{area}</p>
            </div>
            <div className="product-type">
                {type.map((type)=> (
                    <p>{type},</p>
                ))}
            </div>
            </div>
            
        </div>
        </a>
        
        // </Link>
        
    )
}

export default Product

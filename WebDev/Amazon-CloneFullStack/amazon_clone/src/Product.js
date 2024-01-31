import React from 'react';
import './Product.css';
function Product(props) {
  return (
    <div className='product'>
      <img className='product-img' src={props.img} alt="" />
      <div className='product-info'>
        <p>{props.title}</p>
        <div className='product-info-rating'>
        <p>⭐</p>
        </div>
        <div className='product-info-price-btn'>
          <div className='price_rupee'>
            <small className='product_price_ruppee'>₹</small>
            <strong>{props.price}</strong>
          </div>
          <button className='btn-cart' >Add to Cart </button>
        </div>
      </div>
    </div>
  )
}

export default Product;


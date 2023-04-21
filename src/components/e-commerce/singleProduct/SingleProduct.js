import React from 'react'
import './SingleProduct.css'

function SingleProduct({ product }) {
  return (
    <div className='SingleProduct'>
      <img className='productImg' src={product.images[0]} alt={product.title} />
      <div className="productInfo">
        <h2 className='productTitle'>{product.title}</h2>
        <p className='productPrice'>{product.price}</p>
      </div>
      <div className='cartInfo'>
        <button className='button'>-</button>
        <h4>0</h4>
        <button className='button'>+</button>
      </div>
    </div>
  )
}

export default SingleProduct
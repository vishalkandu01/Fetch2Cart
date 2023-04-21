import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../../redux/slices/ProductSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css';

function ProductList() {

  const dispatach = useDispatch();
  const products = useSelector(state => state.productReducer.products)

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    // const response = await fetch('https://fakestoreapi.com/products')
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await response.json();
    dispatach(loadProducts(data));
  }


  return (
    <div className='productList'>
      {products.map(item => <SingleProduct product={item} />)}
    </div>
  )
}

export default ProductList
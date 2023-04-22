import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../redux/slices/ProductSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ProductList() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products)
  const status = useSelector(state => state.productReducer.status);
  const error = useSelector(state => state.productReducer.error)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  if (status === 'loading') {
    const antIcon = <LoadingOutlined style={{ fontSize: '60px', position: 'absolute', top: '40%', left: '50%' }} spin />;
    return <Spin indicator={antIcon} />;
  }

  if (status === 'failed') {
    return (
      <>
        <h2>Uh oh! Something went wrong.</h2>
        <h3>{error}</h3>
      </>
    );
  }

  return (
    <div className='productList'>
      {products.map(item =>
        <SingleProduct key={item.id} product={item} />
      )}
    </div>
  )
}

export default ProductList;

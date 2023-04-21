import React from 'react';
import './App.css';
import NavBar from './components/e-commerce/navbar/NavBar';
import ProductList from './components/e-commerce/productList/ProductList';
import SingleProduct from './components/e-commerce/singleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;

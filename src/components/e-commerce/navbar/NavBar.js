import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import './NavBar.css';

function NavBar() {
    const cart = useSelector(state => state.cartReducer.cart);

    let count = 0;
    cart.forEach(item => count += item.quantity);

    return (
        <nav>
            <div className='left-layout'>
                <BiStore />
                <h1 className='banner'> VishalKandu's Store</h1>
            </div>
            <div className="right-layout">
                <div className="cart-layout">
                    <AiOutlineShoppingCart />
                    <h4>{count}</h4>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

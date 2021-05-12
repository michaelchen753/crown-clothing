import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors';


import './checkout.scss';

const CheckoutPage = ({ cartItems, total })=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem)=>
                cartItem.name
            )
        }
        <div className='total'>
        <span>TOTAL: ${total}</span>
        </div>
    </div>
);
const mapState = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapState)(CheckoutPage);
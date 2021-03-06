import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import './cart-icon.scss';

const CartIcon =({ toggleCartHidden, itemCount })=>(
    <div 
    className='cart-icon'
    onClick={ toggleCartHidden } 
    >
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{ itemCount }</span>
    </div>
)
const mapDispatch = dispatch =>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
});

const mapState = createStructuredSelector({
    itemCount:selectCartItemsCount
});
export default connect(mapState, mapDispatch)(CartIcon);

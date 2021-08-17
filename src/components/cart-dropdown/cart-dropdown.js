import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';




const CartDropdown =({ cartItems, history, toggleCartHidden })=>{
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length?
               ( cartItems.map(cartItem=>
                <CartItem key={ cartItem.id } cartItem={ cartItem }/>))
                :
                (
                    <span className='empty-message'>Your cart is empty.</span>
                    )
            }
        </div>
        <CustomButton 
        onClick = { 
            () =>{ 
                history.push('/checkout');
                toggleCartHidden() 
                }
        }
        >Go TO CHECKOUT</CustomButton>
    </div>
)}
const mapDispatch= dispatch => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapState= createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapState, mapDispatch)(CartDropdown));
import { 
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM
 } from './cart.types';

 import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer = (state = INITIAL_STATE, action={})=> {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return Object.assign({}, state, { 
                hidden:!state.hidden
             });
        case ADD_ITEM:
            return Object.assign({}, state, { 
                cartItems:addItemToCart(state.cartItems, action.payload
                    ) });
        case REMOVE_ITEM:
            return Object.assign({}, state, { 
                cartItems:removeItemFromCart(state.cartItems, action.payload
                    ) });
        case CLEAR_ITEM_FROM_CART:
            return Object.assign({}, state, { 
                cartItems:state.cartItems.filter( 
                cartItem => cartItem.id !== action.payload.id
            )});            
        default:
            return state;
    }  
}
export default CartReducer;

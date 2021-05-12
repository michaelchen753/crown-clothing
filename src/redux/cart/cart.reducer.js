import { 
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
 } from './cart.types';

 import { addItemToCart } from './cart.utils';

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer = (state = INITIAL_STATE, action={})=> {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return Object.assign({}, state, { hidden:!state.hidden });
        case ADD_ITEM:
            return Object.assign({}, state, { cartItems:addItemToCart(state.cartItems, action.payload) });            
        default:
            return state;
    }  
}
export default CartReducer;

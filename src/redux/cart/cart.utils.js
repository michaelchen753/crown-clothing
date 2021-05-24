

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
        if(existingCartItem) {
            return cartItems.map(cartItem=>
                cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity:cartItem.quantity + 1}
                : cartItem
                //对和新添加的相同项目数量进行加一，其他的项目保持不变。
                )
        }
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
        //quantity property gets attached first time around since
        //this if block won't run when it's a new item.
};

export const removeItemFromCart =(cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem.quantity===1) {
       return cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem=>
        cartItem.id === cartItemToRemove.id
        ?{...cartItem, quantity:cartItem.quantity - 1}
        :cartItem
        );
};
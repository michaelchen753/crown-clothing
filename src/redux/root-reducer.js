import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from '../redux/directory/directory.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart','user']//reducer name we want them to be storaged.
};

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer    
});

export default persistReducer(persistConfig, rootReducer) ;
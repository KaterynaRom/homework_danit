import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import cardReducer from './cardReducer';
import modalReducer from './modalReducer';

const reducer = combineReducers({
  card: cardReducer,
  cart: cartReducer,
  modal: modalReducer,
})
export default reducer
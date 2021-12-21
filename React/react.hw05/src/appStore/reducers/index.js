import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import cardReducer from './cardReducer';
import modalReducer from './modalReducer';
import userReducer from "./userReducer";

const reducer = combineReducers({
  card: cardReducer,
  cart: cartReducer,
  modal: modalReducer,
  user: userReducer,
})
export default reducer
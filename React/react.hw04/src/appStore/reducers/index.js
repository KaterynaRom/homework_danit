import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import cardReducer from "./cardReducer";

const reducer = combineReducers({
  card: cardReducer,
  cart: cartReducer,
})
export default reducer







//
// import {GET_PRODUCTS_DATA, SAVE_CART_FROM_LS} from '../actions';
//
// const initialState = {
//   products: [],
//   cart: [],
//
// }
//
// const reducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case GET_PRODUCTS_DATA: {
//       return {...state, products: payload }
//     }
//     case SAVE_CART_FROM_LS: {
//       return {...state, cart: payload }
//     }
//
//     default: return state
//   }
// }
//
// export default reducer
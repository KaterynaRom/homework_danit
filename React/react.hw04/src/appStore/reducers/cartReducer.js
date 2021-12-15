import {SAVE_CART_FROM_LS, ADD_TO_CART, REMOVE_FROM_CART} from '../actions';
import {saveCartToLS} from "../../utils/utils";

const initialState = {
  cart: [],
}

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SAVE_CART_FROM_LS: {
      return {...state, cart: payload }
    }
    case ADD_TO_CART: {
      const newCartProducts = [...state.cart];
      const index = newCartProducts.findIndex(el => el.code === payload.code);

      if (index === -1) {
        const newProd = {...payload, count: 1}
        saveCartToLS('cart', [...state.cart, newProd]);

        return {...state, cart: [...state.cart, newProd]}
      }
      newCartProducts[index].count = newCartProducts[index].count + 1;
      saveCartToLS('cart', newCartProducts);
      return {...state, cartItems: newCartProducts};
    }

    case REMOVE_FROM_CART: {
      return ;
    }

    default: return state
  }
}

export default cartReducer
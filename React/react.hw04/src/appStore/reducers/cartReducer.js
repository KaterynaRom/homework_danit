
import {SAVE_CART_FROM_LS} from '../actions';

const initialState = {
  cart: [],
}

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SAVE_CART_FROM_LS: {
      return {...state, cart: payload }
    }

    default: return state
  }
}

export default cartReducer
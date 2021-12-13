
import {GET_PRODUCTS_DATA, TOGGLE_IS_FAVOURITE_CARDS} from '../actions';

const initialState = {
  products: [],

}

const cardReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS_DATA: {
      return {...state, products: payload }
    }

    case TOGGLE_IS_FAVOURITE_CARDS: {
      return
      const newData = [...state.products];
      const targetIndex = newData.findIndex(e => e.code === payload.code);
      newData[targetIndex] = payload;
      return {...state, products: newData};
    }


    default: return state
  }
}

export default cardReducer
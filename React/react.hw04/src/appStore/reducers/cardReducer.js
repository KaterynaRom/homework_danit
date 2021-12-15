
import {GET_PRODUCTS_DATA, TOGGLE_IS_FAVOURITE_CARDS} from '../actions';
import {saveFavToLS} from "../../utils/utils";

const initialState = {
  products: [],
}

const cardReducer = (state = initialState, {type, payload}) => {

  switch (type) {
    case GET_PRODUCTS_DATA: {
      return {...state, products: payload }
    }

    case TOGGLE_IS_FAVOURITE_CARDS: {
      const idIndex = state.products.findIndex(({code}) => payload === code);
      if (idIndex === -1) {
        return state;
      } else  {
          console.log('hhhh', payload)
        const newItems = [...state.products];
        newItems[idIndex].isFavourite = !newItems[idIndex].isFavourite;
          console.log('isFavourite', !newItems[idIndex].isFavourite);
        saveFavToLS(newItems);
          console.log(newItems);

        return {...state, products: newItems};
      }
    }

    default: return state
  }
}

export default cardReducer
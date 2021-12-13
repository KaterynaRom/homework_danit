import {GET_PRODUCTS_DATA, SAVE_CART_FROM_LS, TOGGLE_IS_FAVOURITE_CARDS} from "../actions";

export const getProductsData = () => async (dispatch) => {
      const response = await fetch('./productsList.json')
        .then(response => response.json());
      const favStatus = localStorage.getItem('favourites') || [];
      response.forEach(prod => prod.isFavourite = favStatus.includes(prod.code));
      dispatch({type: GET_PRODUCTS_DATA, payload: response})
}

export const saveCartFromLS = () => (dispatch) => {
      const cartStatusLS = JSON.parse(localStorage.getItem('cart'));
      if (cartStatusLS) {dispatch({type:SAVE_CART_FROM_LS, payload:cartStatusLS})}
}

export const toggleIsFavourite = (products, code) => (dispatch) => {
      dispatch({type:TOGGLE_IS_FAVOURITE_CARDS, payload: products}) };


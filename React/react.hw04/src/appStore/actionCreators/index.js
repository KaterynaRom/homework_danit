import {GET_PRODUCTS_DATA, SAVE_CART_FROM_LS, TOGGLE_IS_FAVOURITE_CARDS} from "../actions";
import {SET_IS_OPEN_MODAL, SET_MODAL_CONTENT} from "../actions";

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

export const toggleIsFavourite = (products) => (dispatch) => {
      dispatch({type:TOGGLE_IS_FAVOURITE_CARDS, payload: products}) };

export const setIsOpenModal = (isOpenModal) => ({type: SET_IS_OPEN_MODAL, payload: isOpenModal});
export const setModalContent = (isAddModal) => ({type: SET_MODAL_CONTENT, payload: isAddModal});

// const saveCartToLS = (cart) => {localStorage.setItem('cart', cart)}


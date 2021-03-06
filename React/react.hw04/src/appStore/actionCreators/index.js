import {
      GET_PRODUCTS_DATA,
      SAVE_CART_FROM_LS,
      TOGGLE_IS_FAVOURITE_CARDS,
      ADD_TO_CART,
      REMOVE_FROM_CART,
      SET_IS_OPEN_MODAL,
      SET_MODAL_PARAMS,
SET_MODAL_FN, SET_IS_ADD_MODAL} from "../actions";
import {cartStatusLS} from "../../utils/utils";


//prod
export const getProductsData = () => async (dispatch) => {
      const response = await fetch('./productsList.json')
        .then(response => response.json());
      const favStatus = localStorage.getItem('favourites') || [];
      response.forEach(prod => prod.isFavourite = favStatus.includes(prod.code));
            dispatch(saveCartFromLS(cartStatusLS));
      dispatch({type: GET_PRODUCTS_DATA, payload: response})
}

const saveCartFromLS = (cartFromLS) => ({type: SAVE_CART_FROM_LS, payload: cartFromLS});

//fav
export const toggleIsFavourite = (products) => (dispatch) => {
            dispatch(getProductsData());
      dispatch({type: TOGGLE_IS_FAVOURITE_CARDS, payload: products});
}

//cart
export const addToCart = (cartProduct) => ({
      type: ADD_TO_CART, payload: cartProduct
})

export const removeFromCart = (code) => ({
      type: REMOVE_FROM_CART,
      payload: code,
})

//modal
export const setIsOpenModal = (isOpenModal) => ({type: SET_IS_OPEN_MODAL, payload: isOpenModal});

export const setModalParams = (value) => ({ type: SET_MODAL_PARAMS, payload: value });



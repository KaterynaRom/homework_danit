import {SET_IS_OPEN_MODAL, SET_MODAL_PARAMS} from "../actions";

const initialState = {
  isOpenModal: false,
  modalTitle: 'Are you sure you want to remove the product?',
  code: '',
  isAddModal: true,
}

const modalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_IS_OPEN_MODAL': {
      return {...state, isOpenModal: payload}
    }
    case 'SET_MODAL_PARAMS': {
      return {...state, code: payload?.code}
    }


    // case 'SET_MODAL_CONTENT': {
    //   return {...state, modalTitle: payload}
    // }
    // case 'SET_IS_ADD_MODAL': {
    //   return {...state, isAddModal: payload}
    // }


    default: return state
  }
}

export default modalReducer
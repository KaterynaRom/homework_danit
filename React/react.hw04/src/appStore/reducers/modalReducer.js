import {SET_IS_OPEN_MODAL, SET_MODAL_CONTENT} from "../actions";

const initialState = {
  isOpenModal: false,
  isAddModal: true,
}

const modalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_IS_OPEN_MODAL': {
      return {...state, isOpenModal: payload}
    }
    case 'SET_MODAL_CONTENT': {
      return {...state, isAddModal: payload}
    }

    default: return state
  }
}

export default modalReducer
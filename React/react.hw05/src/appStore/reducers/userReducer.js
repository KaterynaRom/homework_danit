import {GET_USER_INFO, GET_ORDER_INFO} from "../actions";

const initialState = {
  user: {},
  order: {},
}

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_USER_INFO: {
      return ;
    }
    case GET_ORDER_INFO: {
      return ;
    }

    default: return state
  }
}

export default userReducer

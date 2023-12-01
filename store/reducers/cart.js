import { SET_CART } from "../types";

// var pref = typeof window === 'undefined' ? null : JSON.parse(localStorage.getItem("currency"));

const initialState = {
  data : {
    plan : {
      period : {
        id : 0,
        nb : 1
      },
      connection : {
        id : 1,
        slug : 1
      }
    }
  }
}
const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        data : action.payload,
    }
    default:
      return state;
  }
};

export default cart;

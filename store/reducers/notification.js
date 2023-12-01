import { SET_NOTIFICATION } from "../types";

// var pref = typeof window === 'undefined' ? null : JSON.parse(localStorage.getItem("currency"));

const initialState = {
    data : {
        message : null,
        active : false,
        delay : null,
        type : null
    }
}
const notification = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        data : action.payload,
    }
    default:
      return state;
  }
};

export default notification;

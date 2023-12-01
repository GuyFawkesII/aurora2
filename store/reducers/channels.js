import { channels } from "../../data/channels"
import { 
    SET_CHANNEL,
    SET_FILTERED_CHANNELS,
    RESET_FILTER
 } from "../types";
const initialDataState = {
    // channels : channels,
    // filtered : channels,
    filter  :{
        keyword : '',
        country : 'AllCountries',
        state : 'loading'
    }
}
export const channel = (state = initialDataState, action) => {
    // console.log(action.type)
    switch (action.type) {
      case SET_CHANNEL:
        return {
          ...state,
          filter: {
            ...state.filter,
            ...action.payload
          }
      };
      case SET_FILTERED_CHANNELS:
        return {
          ...state,
          filtered: action.payload,
        };
      case RESET_FILTER:
        return {
            ...state,
            filtered : channels
        }
      default:
        return state;
    }
};
export default channel
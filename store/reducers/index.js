import { combineReducers } from "redux";
import preferences from "./curr";
import cart from "./cart";
import notification from './notification'
import channel from './channels'

export default combineReducers({
    preferences : preferences,
    cart : cart,
    notification:notification,
    channel : channel
});
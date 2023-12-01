import { SET_PREFE, SET_SPLASH,SET_CART,SET_NOTIFICATION} from "../types";

import { SET_CHANNEL,SET_FILTERED_CHANNELS , RESET_FILTER } from "../types";
import { channels } from "../../data/channels";

export const setNotification = (data) => async (dispatch) => {
  // try {
    dispatch({
      type : SET_NOTIFICATION,
      payload : data
    })
  // }
}
export const setChannelFilter = (filter) => (dispatch) => {
  // console.log(filter)
  dispatch({
    type: SET_CHANNEL,
    payload: filter,
  });
};
const fetchChannelsWithFilter = async ( keyword, country) => {
  // Create a regular expression for case-insensitive search
  const searchRegex = new RegExp(keyword, 'i');

  // Filter the channels based on the keyword and country
  const filteredChannels = channels.filter((channel) => {
    const matchKeyword = !keyword || searchRegex.test(channel.name);
    const matchCountry = country === null || channel.country === country;
    return matchKeyword && matchCountry;
  });
  return filteredChannels;
};
export const fetchFilteredChannels = (filter) => async (dispatch, getState) => {
  // Dispatch the filter update first
  // dispatch(setChannelFilter(filter));
  // console.log(filter)
  // console.log("startedFiltering")
  // Perform the async filtering, for example, making an API call
  try {
    // Fetch channels based on the filter criteria
    const response = await fetchChannelsWithFilter(filter.keyword,filter.country); // Replace with your actual API call
    console.log("filtered channels, sending to redux")
    // Assuming you get the filtered channels in the response
    const filteredChannels = response; // Adjust this based on your API response structure

    // Dispatch an action to update the filtered channels
    dispatch({
      type: SET_FILTERED_CHANNELS,
      payload: filteredChannels,
    });

  } catch (error) {
    // Handle any error that occurred during the fetch
    console.error("Error fetching filtered channels: ", error);
  }
};
export const setPreferences = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_PREFE,
      payload: data ,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
export const setSplash = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SPLASH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
export const setCart = (data) => async (dispatch) => {
  // console.log(data)
  try {
    dispatch({
      type: SET_CART,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
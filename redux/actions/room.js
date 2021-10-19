import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERROR,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
} from '../constants/room';

export const getRooms =
  (req, currentPage = 1) =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);

      const { data } = await axios.get(
        `${origin}/api/rooms?page=${currentPage}`
      );

      dispatch({
        type: ALL_ROOMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_ROOMS_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };

export const getRoomsDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

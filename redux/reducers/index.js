import { combineReducers } from 'redux';
import { checkBookingReducer } from './booking';
import { roomDetailsReducer, roomReducer } from './room';
import {
  authReducer,
  forgotPasswordReducer,
  loadedUserReducer,
  userReducer,
} from './user';

const reducer = combineReducers({
  allRooms: roomReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  loadedUser: loadedUserReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
});

export default reducer;

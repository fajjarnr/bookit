import { combineReducers } from 'redux';
import { roomReducer, roomDetailsReducer } from './room';
import {
  authReducer,
  loadedUserReducer,
  userReducer,
  forgotPasswordReducer,
} from './user';

const reducer = combineReducers({
  allRooms: roomReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  loadedUser: loadedUserReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

export default reducer;

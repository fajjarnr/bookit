import { combineReducers } from 'redux';
import { roomReducer, roomDetailsReducer } from './room';
import { authReducer, loadedUserReducer, userReducer } from './user';

const reducer = combineReducers({
  allRooms: roomReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  loadedUser: loadedUserReducer,
  user: userReducer,
});

export default reducer;

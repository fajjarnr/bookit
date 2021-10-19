import { combineReducers } from 'redux';
import { roomReducer, roomDetailsReducer } from './room';

const reducer = combineReducers({
  allRooms: roomReducer,
  roomDetails: roomDetailsReducer,
});

export default reducer;

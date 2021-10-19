import { combineReducers } from 'redux';
import { roomReducer } from './room';

const reducer = combineReducers({
  allRooms: roomReducer,
});

export default reducer;

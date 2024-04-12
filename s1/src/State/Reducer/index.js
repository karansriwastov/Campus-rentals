import {combineReducers} from 'redux';
import GiveItemsReducer from './GiveItemsReducer';
const reducers=combineReducers({
    GiveItems:GiveItemsReducer
})
export default reducers;
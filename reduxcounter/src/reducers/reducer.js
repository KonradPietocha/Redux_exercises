import { combineReducers } from 'redux';
import painter from './painter'
import counter from './counter'

export default combineReducers({
    painter,
    counter
});
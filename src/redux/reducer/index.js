import { combineReducers } from 'redux'
import count from './count'
import api from './api'

const rootReducer = combineReducers({
    count,
    api
});

export default rootReducer;
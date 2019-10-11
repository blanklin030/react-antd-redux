import * as ActionTypes from '../types/index'
export default (state = "", action) => {
    switch (action.type) {
        case ActionTypes.ADD_API:
            state = action.text
            return state;  
        default:
            return state;
    }
}
import * as ActionTypes from '../types/index'
export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    };
  };
  
export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    };
};

export const add_api = (text) => {
    return {
        type: ActionTypes.ADD_API,
        text: text
    };
};
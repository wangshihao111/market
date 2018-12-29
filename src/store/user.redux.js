// action types
const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {};

// reducer
export function user(state=initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.payload}
    default:
      return state;
  }
}
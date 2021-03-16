import ActionTypes from './types';

const initialState = {
  count: 0,
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + action.payload.value,
      };
    case ActionTypes.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

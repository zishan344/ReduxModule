import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(action.payload.value);
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;

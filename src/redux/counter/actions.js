import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (value) => {
  console.log("value", value);
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

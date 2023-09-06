import { COLORCHANGED, STATUSCHANGED } from "./actionTdypes";

export const colorechanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
export const statuschanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

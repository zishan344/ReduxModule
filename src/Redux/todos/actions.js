import {
  ADDED,
  TOGGLED,
  COLORESELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./actionType";

export const addTodo = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLORESELECTED,
    payload: {
      todoId,
      color,
    },
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

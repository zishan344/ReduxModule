const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware, fetchTodosMiddleware } = require("./middleware");
// initial state
const initialState = {
  todo: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  6;
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      console.log(action.payload);
      return {
        ...state,
        todo: [...state.todo, ...action.payload],
      };

    default:
      break;
  }
};

// create store
const store = createStore(
  todoReducer,
  applyMiddleware(delayActionMiddleware, fetchTodosMiddleware)
);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions

/* store.dispatch({
  type: "todos/todoAdded",
  payload: "Learn redux from LWS",
}); */
store.dispatch({
  type: "todos/fetchTodos",
});

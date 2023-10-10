const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./test.middleware");

const initialState = {
  todos: [],
};
// create reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoLoaded":
      console.log("hallo world");
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

// create store
const store = createStore(todoReducer, applyMiddleware(fetchTodos));

// store subscribe

store.subscribe(() => {
  console.log(store.getState());
});

// create dispatch function

store.dispatch({
  type: "todos/fetchReducer",
});
console.log("hallo world");

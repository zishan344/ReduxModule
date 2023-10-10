const { default: fetch } = require("node-fetch");

const fetchTodos = (store) => (next) => async (action) => {
  console.log("action", action.type);
  if (action.type === "todos/fetchReducer") {
    console.log("h");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();
    // console.log(todo);
    store.dispatch({
      type: "todos/todoLoaded",
      payload: todos,
    });
    console.log(`Number of updated Todos: ${store.getState().todo?.length}`);
    return;
  }
  return next(action);
};
module.exports = {
  fetchTodos,
};
//        "https://jsonplaceholder.typicode.com/todos?_limit=5"

import { added } from "../todos/actions";

const addTodo = (todoText) => async (dispatch) => {
  console.log(todoText);
  const response = await fetch("http://localhost:9000/todos", {
    method: "POST",
    body: JSON.stringify({
      text: todoText,
      completed: false,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  const todo = await response.json();
  dispatch(added(todo.text));
};

export default addTodo;

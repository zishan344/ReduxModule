import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorechanged, statuschanged } from "../Redux/filter/actions";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No tasks";
    case 1:
      return "1 task";
    default:
      return `${no_of_todos} tasks`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const remaingingTask = todos.filter((task) => !task.completed).length;
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  const { status, colors } = filter;
  const handleStatusChange = (status) => {
    dispatch(statuschanged(status));
  };
  const handleColorsChange = (color) => {
    if (colors.includes(color)) {
      return dispatch(colorechanged(color, "removed"));
    } else {
      return dispatch(colorechanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p> {numberOfTodos(remaingingTask)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}>
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}>
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}>
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorsChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  
          ${colors.includes("green") && "bg-green-500"}
          `}></li>
        <li
          onClick={() => handleColorsChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer 
          ${colors.includes("red") && "bg-red-500"}
          `}></li>
        <li
          onClick={() => handleColorsChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}></li>
      </ul>
    </div>
  );
};

export default Footer;

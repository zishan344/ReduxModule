import React from "react";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <ToDoItem />
    </div>
  );
};

export default ToDo;

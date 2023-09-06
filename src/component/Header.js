import React, { useState } from "react";
import tick from "../assets/images/double-tick.png";
import notes from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { addTodo, allCompleted, clearCompleted } from "../Redux/todos/actions";
const Header = () => {
  const [inputText, setInputText] = useState("");
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputText));
    setInputText("");
  };
  const handleAllComplete = () => {
    dispatch(allCompleted());
  };
  const handleClearComplete = () => {
    console.log("clear");
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          type="text"
          value={inputText}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tick} alt="Complete" />
          <span onClick={handleAllComplete}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearComplete}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;

import noteImage from "../assets/assets/images/notes.png";
import plusImage from "../assets/assets/images/plus.png";
import tickImage from "../assets/assets/images/double-tick.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completeHandler = () => {
    dispatch(allCompleted());
  };

  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          onChange={handleInput}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span onClick={completeHandler}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;

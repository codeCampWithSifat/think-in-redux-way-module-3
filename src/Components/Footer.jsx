import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

const taskCounting = (todos) => {
  if (todos === 0) {
    return "No Task";
  } else if (todos === 1) {
    return "1 Task";
  } else {
    return `${todos} Tasks`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;
  const dispatch = useDispatch();
  const remainingTask = todos.filter((todo) => !todo.completed).length;

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChanged = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
      // console.log("Removed");
    } else {
      dispatch(colorChanged(color, "added"));
      // console.log("Added");
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{taskCounting(remainingTask)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChanged("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChanged("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChanged("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChanged("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;

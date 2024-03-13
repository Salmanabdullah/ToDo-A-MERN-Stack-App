import React from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const handleClick = async () => {
    const response = await fetch("/home" + todo._id, { method: "DELETE" });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: data });
    }
  };
  return <div>TodoDetails</div>;
};

export default TodoDetails;

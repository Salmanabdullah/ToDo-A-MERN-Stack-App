import React, { useEffect } from "react";
import TodoDetails from "../Components/TodoDetails";
import { useTodoContext } from "../hooks/useTodoContext";
import TodoForm from "../Components/TodoForm";

const Home = () => {
  const { todos, dispatch } = useTodoContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: data });
      }
    };
    fetchTodos();
  }, [dispatch]);
  return (
    <div className="bg-[#54616B] min-h-screen">
      <div className="text-center ">
        <h1 className="mb-4 text-white text-3xl font-bold pt-8">Todo List</h1>
        <form className="">
          <input
            type="text"
            name="search"
            className="bg-[#212529] text-white"
            placeholder="search todos"
          />
        </form>
        <div>
          {todos &&
            todos.map((todo) => {
              <TodoDetails key={todo._id} todo={todo} />;
            })}
        </div>
        <TodoForm/>
      </div>
    </div>
  );
};

export default Home;

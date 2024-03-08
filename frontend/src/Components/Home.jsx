import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#54616B] min-h-screen">
      <div className="flex flex-row gap-4 mr-4 justify-end">
        <div>
          <Link to={"/signup"}>
            <button className="bg-gray-900 text-white text-xl rounded-lg pr-4 pl-4 p-2">
              Sign Up
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/signin"}>
            <button className="bg-gray-900 text-white text-xl rounded-lg pr-4 pl-4 p-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center bg-red-400">
        <h1 className="mb-4 text-white text-3xl font-bold pt-8">Todo List</h1>
        <form className="">
          <input
            type="text"
            name="search"
            className="bg-[#212529] text-white"
            placeholder="search todos"
          />
        </form>
        <ul className="">
          <li className="">
            <span>clean the dishes</span>
            <i className=""></i>
          </li>
          <li className="">
            <span>through the boxes</span>
            <i className=""></i>
          </li>
          <li className="">
            <span>go to DHL shop</span>
            <i className=""></i>
          </li>
        </ul>
        <form className="">
          <label className="">Add a new todo...</label>
          <input type="text" name="add" className="" />
        </form>
      </div>
    </div>
  );
};

export default Home;

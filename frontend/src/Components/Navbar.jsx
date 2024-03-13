import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>My ToDos</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-4 mr-4 justify-end">
        <div>
          <Link to={"/users/signup"}>
            <button className="bg-gray-900 text-white text-xl rounded-lg pr-4 pl-4 p-2">
              Sign Up
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/users/signin"}>
            <button className="bg-gray-900 text-white text-xl rounded-lg pr-4 pl-4 p-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

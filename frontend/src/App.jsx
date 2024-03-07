import React from 'react'

const App = () => {
  return (
    <div>
      <header>
        <div className="flex flex-row gap-4 float-end mr-4">
          <div>
            <button className="bg-gray-900 text-white text-xl rounded-lg pr-4 pl-4 p-2">
              Sign Up
            </button>
          </div>
          <div>
            <button className="bg-gray-900 text-white text-xl rounded-lg pr-4 pl-4 p-2">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App
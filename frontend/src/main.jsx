import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { TodosContextProvider } from "./context/todosContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodosContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodosContextProvider>
);

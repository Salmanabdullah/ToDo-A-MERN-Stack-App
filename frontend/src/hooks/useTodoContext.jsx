import { TodosContext } from "../context/todosContext";
import { useContext } from "react";

export const useTodoContext = ()=>{
    const context = useContext(TodosContext)

    if(!context) {
        throw Error(
          "useTodosContext must be used inside an TodosContextProvider"
        );
    }
    return context
}
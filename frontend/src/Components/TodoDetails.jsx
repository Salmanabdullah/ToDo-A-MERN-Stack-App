import PropTypes from "prop-types";
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
  return (
    <div>
      <h4>{todo.title}</h4>
      <span className="" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

//PropType
TodoDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoDetails;

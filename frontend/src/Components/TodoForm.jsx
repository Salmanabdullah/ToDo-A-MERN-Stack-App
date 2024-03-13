import {useState} from 'react'
import { useTodoContext } from '../hooks/useTodoContext';

const TodoForm = () => {
    const {dispatch} = useTodoContext()

    const [title, setTitle] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async()=>{
        const todo = {title}

        const response = await fetch('/api/todos/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data = await response.json()

        if(!response.ok){
            setError(data.error)
            setEmptyFields(data.emptyFields)
        }

        if(response.ok){
            setTitle('')
            setError(null)
            setEmptyFields([])
            dispatch({ type: "CREATE_TODO" , payload: data});
        }
    }
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <label className="">Add a new todo...</label>
        <input
          type="text"
          className={emptyFields.includes("title") ? "error" : ""}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Add</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default TodoForm
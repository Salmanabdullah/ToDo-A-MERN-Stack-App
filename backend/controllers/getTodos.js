import TODO from "../models/todoModel.js";

const getTodos = async (req,res) => {
    try{
        const todos = await TODO.find({})
        return res.status(200).json(todos);
    }catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export default getTodos;
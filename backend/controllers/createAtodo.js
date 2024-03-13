import {TODO} from "../models/todoModel.js";

// create a todo
const createAtodo = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send({ message: "Please enter a title" });
    }
    const newTodo = { title: req.body.title };
    const todo = await TODO.create(newTodo);

    res.status(201).send(todo);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default createAtodo;

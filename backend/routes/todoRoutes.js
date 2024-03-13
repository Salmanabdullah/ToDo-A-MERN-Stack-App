import express from "express";
import getTodos from "../controllers/getTodos.js";
import createAtodo from "../controllers/createAtodo.js";

// import all controllers

const router = express.Router();

// Get all todos
router.get("/", getTodos);

// post a new todo
router.post("/", createAtodo);
// delete a todo

// updae a todo

export default router;

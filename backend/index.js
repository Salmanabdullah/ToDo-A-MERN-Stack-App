import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import signUpRoute from "./routes/signUpRoute.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse request body
app.use(express.json());

app.use(cors());

//routes
app.use("/home", todoRoutes);
app.use("/users", signUpRoute);
// app.use("/users", signInRoute);

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening....`);
    });
  })
  .catch(() => console.log("no connection"));

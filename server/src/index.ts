import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import dotenv from 'dotenv';
import { userRoutes } from "./routes/user";
import { postRoutes } from "./routes/post";
import { messageRoutes } from "./routes/message";
dotenv.config();

const app = express();
const cors = require('cors');
const PORT = process.env.PORT ?? 3000;

app.use(cors())
app.use(express.json());

app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", messageRoutes);

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`)
  try {
    await createConnection()
    console.log("Database connection!")
  } catch (err) {
    console.log(err);
  }
})
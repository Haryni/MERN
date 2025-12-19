import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
//const express = require("express");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

console.log(process.env.MONGO_URI);

connectDB();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request method is ${req.method} and request url is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on PORT: 5001");
});

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import Trail from "./routes/routes.js";
import fs from "node:fs/promises";
import mongoose from "mongoose";
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/trail", Trail);
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected"))
    .catch((error) => console.error("DB connection error", error));
});

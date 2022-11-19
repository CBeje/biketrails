import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import Trail from "./routes/routes.js";
import fs from "node:fs/promises";
import mongoose from "mongoose";
const app = express();
const port = 8080;
app.locals.diff = "All";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", "./views");
app.get("/", Trail);
app.get("cor", Trail);
app.get("tri", Trail);
app.get("sas", Trail);
app.get("tob", Trail);
app.get("val", Trail);
app.get("tim", Trail);

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/cor", function (req, res) {
  res.render("cor");
});

app.get("/tri", function (req, res) {
  res.render("tri");
});

app.get("/sas", function (req, res) {
  res.render("sas");
});

app.get("/val", function (req, res) {
  res.render("val");
});

app.get("/tob", function (req, res) {
  res.render("tob");
});

app.get("/tim", function (req, res) {
  res.render("tim");
});

app.get("param/:param1", (req, res) => {
  const data = req.params;
  console.log("params", data);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected"))
    .catch((error) => console.error("DB connection error", error));
});

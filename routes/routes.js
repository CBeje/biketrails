import express from "express";
import Trail from "../models/trail.js";
const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const trails = await Trail.find({});
  res.render("index", { trails });
});

export default router;

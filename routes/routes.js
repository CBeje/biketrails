import express from "express";
const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/trail", async (req, res) => {
  await Trail.create({ name: req.params.name, difficulty: "easy" });
  res.render("trail");
});

export default router;

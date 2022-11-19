import mongoose from "mongoose";

const schema = new mongoose.Schema({
  code: "string",
  name: "string",
  difficulty: "string",
  img: "string",
});

export let Trail = mongoose.model("Trail", schema);
export default Trail;

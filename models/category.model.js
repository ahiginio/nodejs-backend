/* eslint-disable no-undef */
import mongoose from "mongoose";
import validator from "validator";

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Titulo es requerido"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", Schema);
export default Category;

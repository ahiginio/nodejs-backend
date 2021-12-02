/* eslint-disable no-undef */
import mongoose from "mongoose";
import validator from "validator";

const Schema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: [true, "SKU es requerido"],
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Titulo es requerido"],
    },
    price: {
      type: Number,
      required: [true, "Precio es requerido"],
    },
    photo: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", Schema);
export default Product

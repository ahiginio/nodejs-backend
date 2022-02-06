/* eslint-disable no-undef */
import mongoose from "mongoose";
import validator from "validator";
const { Schema } = mongoose;
const schema = new Schema(
  {
    sku: {
      type: String,
      required: [true, "SKU es requerido"],
      unique: true,
    },
    category: { type: Schema.ObjectId, ref: "category" },
    title: {
      type: String,
      required: [true, "Titulo es requerido"],
    },
    price: {
      type: Number,
      required: [true, "Precio es requerido"],
    },
    stock: {
      type: Number,
      required: [true, "Stock es requerido"],
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

const Product = mongoose.model("Product", schema);
export default Product

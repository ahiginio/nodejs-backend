/* eslint-disable no-undef */
import mongoose from "mongoose";
import validator from "validator";

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "El mail es requerido"],
    },
    status: {
      type: String,
      required: [true, "El estado de la orden es requerido"],
    },
    order_number: {
      type: Number,
    },
    address: {
      type: String,
    },
    items: [
      {
        title: {
          type: String,
          required: [true, "El titulo del producto es requerido"],
        },
        description: {
          type: String,
          required: [true, "La descripcion del producto es requerida"],
        },
        price: {
          type: Number,
          required: [true, "El precio del producto es requerido"],
        },
        qty: {
          type: Number,
          required: [true, "La cantidad del producto es requerido"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", Schema);
export default Order;

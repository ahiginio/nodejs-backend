/* eslint-disable no-undef */
import mongoose from "mongoose";
import validator from "validator";

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "El mail es requerido"],
    },
    type: {
      type: String,
      required: [true, "El tipo de usuario es requerido"],
    },
    message: {
      type: String,
      required: [true, "El mensaje es requerido"],
    },
  },
  {
    timestamps: true,
  }
);

const Mensaje = mongoose.model("Mensaje", Schema);
export default Mensaje;

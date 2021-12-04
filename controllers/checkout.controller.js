import express from "express";
import Cart from "../models/cart.model.js";
import mongoose from "mongoose";
import transporter from "../utils/mailTransport.js";
import logger from "../utils/logger.js";

const date = new Date();

export async function checkoutByCartId(req, res) {
  try{
    const CartById = await Cart.findOne({ _id: req.params.id })
    console.log(req.user);
    try {
      const mailOptions = {
        from: "agustin@creativedog.agency",
        to: "agustin@creativedog.agency",
        subject: `Nuevo Pedido de ${req.user.firstName} ${req.user.lastName}, ${req.user.email}`,
        html: `
        <h1>Datos de la compra</h1>
       ${CartById.products.map((producto) => {
          return `
          <div>
          <h3>Producto: ${producto.title}</h3>
          <h4>Precio: ${producto.price}</h4>
          <h5>Stock: ${producto.stock}</h5>
          </div>`;  
        })}
        `,
      };
      const response = await transporter.sendMail(mailOptions);
      
      logger.info("Se envio el mail al usuario registrado");
    } catch (error) {
      logger.fatal("Hubo un error en el envio del mail al usuario");
    }
    return res.status(200).json({success: true, msg: "Compra realizada con exito", data: CartById})
  }
  catch{
    logger.fatal(`No existe el carrito con id ${req.params.id}`);
    return res
      .status(404)
      .json({ success: false, error: "No se encontro el cart" });
  }
}
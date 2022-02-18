import Order from '../models/order.model.js'
import transporter from "../utils/mailTransport.js";
import logger from "../utils/logger.js";

export async function createOrder(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar un order a crear",
    });
  }
  const orderNumber = await Order.estimatedDocumentCount()
  console.log(orderNumber)
  const order = new Order({
    email: body.email,
    status: body.status,
    order_number: orderNumber === 0 ? 1 : orderNumber + 1,
    items: body.items,
    address: body.address,
  });
  if (!order) {
    return res.status(400).json({ success: false, error: "Faltan campos" });
  }
  order
    .save()
    .then(() => {
      try {
        const mailOptions = {
          from: "agustin@creativedog.agency",
          to: "agustin@creativedog.agency",
          subject: "Nueva orden de compra",
          html: `
        <h1>Datos de la compra</h1>
        <span>Email: ${body.email}</span>
        <span>Numero de orden: ${orderNumber === 0 ? 1 : orderNumber + 1}</span>
        <span>Direccion: ${body.address}</span>
        
        <span>Items: ${body.items}</span>
        `,
        };
        transporter.sendMail(mailOptions);
        logger.info("Se envio el mail de la nueva compra");
      } catch (error) {
        logger.fatal("Hubo un error en el envio del mail al usuario");
      }
      return res.status(201).json({
        success: true,
        id: order._id,
        message: "Order creado!",
      });
    })
    .catch((error) => {
      console.log(error)
      return res.status(400).json({
        error,
        message: "Hubo un error, no se creo el order!",
      });
    });
}
export async function listarOrders(req, res) {
  await Order.find({})
    .then((ordenes) => {
      if (!ordenes.length) {
        return res
          .status(404)
          .json({ success: false, error: "No se encontraron ordenes" });
      }
      return res.status(200).json(ordenes);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
}

export async function deleteOrder(req, res) {
  const body = req.body;
  await Order.findOneAndDelete({ _id: req.params.id })
    .then((orden) => {
      if (!body) {
        return res.status(400).json({
          success: false,
          error: "Debes ingresar una orden a borrar",
        });
      }
      return res.json({
        success: true,
        message: `Se borro el orden con ID ${req.params.id}`,
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
        error: "-2",
        descripcion: `No se encontró el orden con ID ${req.params.id}`,
      });
    });
}
import Mensaje from "../models/mensajes.model.js";
const date = new Date();

export function createMensajes(req, res) {
  const body = req.body
   if (!body) {
     return res.status(400).json({
       success: false,
       error: "Debes ingresar una categoria a crear",
     });
   }
  const mensaje = new Mensaje(body);
  if (!mensaje) {
    return res.status(400).json({ success: false, error: "Faltan campos" });
  }
  mensaje
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: mensaje._id,
        message: "Mensaje creado!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Hubo un error, no se creo el mensaje!",
      });
    });
}
export async function listarMensajes(req, res) {
  await Mensaje.find({})
  .then((mensajes) => {
    if (!mensajes.length) {
      return res
        .status(404)
        .json({ success: false, error: "No se encontraron mensajes" });
    }
    return res.status(200).json(mensajes);
  })
  .catch((err) => {
    return res.status(400).json({ success: false, error: err });
  });
}
export async function listarMensajesByEmail(req, res) {
  await Mensaje.find({ email: req.body.email})
  .then((mensajes) => {
    if (!mensajes.length) {
      return res
        .status(404)
        .json({ success: false, error: "No se encontraron mensajes de este email" });
    }
    return res.status(200).json(mensajes);
  })
  .catch((err) => {
    return res.status(400).json({ success: false, error: err });
  });
}
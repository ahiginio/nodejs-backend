import Cart from '../models/cart.model.js'
import mongoose from 'mongoose'
const date = new Date()

export function createCart(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar un producto a crear",
    });
  }
  const carrito = new Cart(body);
  carrito
    .save()
    .then(() => {
      return res
        .status(201)
        .json({ success: true, id: carrito._id, message: "Cart creado" });
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ error: err, message: "No se pudo crear el carrito" });
    });
}
export async function listarProductosCartById(req, res) {
  await Cart.findOne({ _id: req.params.id }).then((carrito) => {
    if (!req.params.id) {
      return res
        .status(404)
        .json({ success: false, error: "Debe ingresar un id de carrito" });
    }
    console.log(carrito);
    return res.status(200).json({ success: true, data: carrito });
  });
}
export async function agregarProductosCart(req, res) {
  const body = req.body;
  await Cart.findOne({ _id: req.params.id }).then((carrito) => {
    if (!body) {
      return res.status(404).json({
        success: false,
        error: "Debe ingresar un producto para agregar",
      });
    }
    const Producto = {
      _id: new mongoose.Types.ObjectId(),
      title: body.title,
      description: body.description,
      sku: body.sku,
      photo: body.photo,
      price: body.price,
      stock: body.stock,
      timestamp: date.toLocaleString("es-AR"),
    };
    carrito.productos.push(Producto);
    carrito
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: carrito._id,
          message: `${Producto.nombre} agregado al carrito con ID ${carrito._id}`,
        });
      })

      .catch((err) => {
        return res
          .status(404)
          .json({ err, message: "El producto no se pudo agregar" });
      });
  });
}
export async function deleteCart (req, res) {
  const body = req.body;
  await Cart.findOneAndRemove({ _id: req.params.id })
    .then((carrito) => {
      if (!carrito) {
        return res.status(400).json({
          success: false,
          error: "No se encontro carrito para borrar",
        });
      }
      return res
        .status(200)
        .json({ success: true, message: "Cart borrado" });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ err, message: "Hubo un error eliminando el carrito" });
    });
}
export async function deleteProductosCart(req, res) {
  const body = req.body;
  console.log(req.params.id_prod);
  await Cart.findById(req.params.id)
    .then((res) => {
      const carrito = res;
      const carritoUpdate = carrito.productos.filter(
        (productos) => productos._id != req.params.id_prod
      );
      Cart.findByIdAndUpdate(req.params.id, { productos: carritoUpdate });
      return res
        .status(200)
        .json({ success: true, message: "Cart actualizado con exito" });
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(400)
        .json({ error: error, message: "Cart no encontrado" });
    });
}
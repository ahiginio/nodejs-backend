import Cart from '../models/cart.model.js'
import Product from '../models/product.model.js'
import User from '../models/user.model.js'
import mongoose from 'mongoose'
const date = new Date()

export async function createCart(req, res) {
  const body = req.body;
  const user = req.params.user
  console.log(user)
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar un producto a crear",
    });
  }
  await Cart.findOne({ user: user }).populate({
    path: "user",
    model: "User",
  }).then((cart) => {
    if(!cart) {
      const carrito = new Cart({ user: user});
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
    else { 
      return res
        .status(401)
        .json({  message: "Ya existe un cart para este usuario" });
    }
    }).catch((err) => {
      console.log(err)
      return res
      .status(402)
      .json({ error: err, message: "Ya existe el carrito" });
    })

}
export async function listarProductosCartById(req, res) {
  await Cart.findOne({ _id: req.params.id })
    .populate({ path: "products.product", model: "Product" })
    .then((carrito) => {
      if (!req.params.id) {
        return res
          .status(404)
          .json({ success: false, error: "Debe ingresar un id de carrito" });
      }
      console.log(carrito);
      return res.status(200).json(carrito);
    });
}
export async function agregarProductosCart(req, res) {
  const body = req.body;
  await Cart.findOne({ _id: req.params.id })
    .populate({ path: "products.product", model: "Product" })
    .then((carrito) => {
      if (!body) {
        return res.status(404).json({
          success: false,
          error: "Debe ingresar un producto para agregar",
        });
      }
      const Producto = {
         _id: new mongoose.Types.ObjectId(),
         product: body.product_id,
         qty: body.qty,
         timestamp: date.toLocaleString("es-AR"),
      };
      if(carrito.products.find((obj) => obj.product.id === body.product_id)) {
        console.log('ENTRA AL IF')
          carrito.products.map((obj) => {
            if (obj.product.id === body.product_id) {
              obj.qty = obj.qty + body.qty
            }
            return obj;
          });
          carrito
            .save()
            .then(() => {
              return res.status(200).json({
                success: true,
                id: carrito._id,
                message: `${body.product_id} se actualizo`,
              });
            })

            .catch((err) => {
              return res
                .status(404)
                .json({ err, message: "El producto no se pudo agregar" });
            });
      }
      else {
        carrito.products.push(Producto);
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
      }

      
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
  await Cart.findById({ _id: req.params.id })
    .then((carrito) => {
      const carritoUpdate = carrito.products.filter(
        (products) => products._id != req.params.id_prod
      );
      Cart.findByIdAndUpdate(
        { _id: req.params.id },
        { products: carritoUpdate }
      )
        .then(() => {
          return res
            .status(200)
            .json({ success: true, message: "Producto eliminado con exito" });
        })
        .catch(() => {
          return res
            .status(402)
            .json({ error: true, message: "El producto no pudo ser eliminado" });
        }); 
      
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(400)
        .json({ error: error, message: "Cart no encontrado" });
    }); 
}

import Product from '../models/product.model.js'
import Category from '../models/category.model.js'
const date = new Date()

export function createProduct(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar un producto a crear",
    });
  }
  const producto = new Product(body);
  if (!producto) {
    return res.status(400).json({ success: false, error: "Faltan campos" });
  }
  producto
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: producto._id,
        message: "Product creado!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Hubo un error, no se creo el producto!",
      });
    });
}
export async function listarProducts (req, res) {
  await Product.find({})
    .populate({ path: "category", model: "Category" })
    .then((productos) => {
      if (!productos.length) {
        return res
          .status(404)
          .json({ success: false, error: "No se encontraron productos" });
      }
      return res.status(200).json(productos);
    })
    .catch((err) => {
      console.log(err)
      return res.status(400).json({ success: false, error: err });
    });
}
export async function listarProductById (req, res) {
  await Product.findOne({ _id: req.params.id })
    .populate({ path: "category", model: "Category" })
    .then((producto) => {
      if (!req.params.id) {
        return res.status(404).json({
          success: false,
          error: "Debe ingresar un producto para poder filtrar",
        });
      }
      return res.status(200).json(producto);
    })
    .catch((err) => {
      return res.json({
        success: false,
        error: "-2",
        descripcion: `No se encontró el producto con ID ${req.params.id}`,
      });
    });
}
export async function listarProductByCategoryId(req, res) {
  await Product.find({ category: req.params.catId })
    .populate({ path: "category", model: "Category" })
    .then((producto) => {
      if (!req.params.catId) {
        return res.status(404).json({
          success: false,
          error: "Debe ingresar un producto para poder filtrar",
        });
      }
      return res.status(200).json(producto);
    })
    .catch((err) => {
      return res.json({
        success: false,
        error: "-2",
        descripcion: `No se encontró el producto con ID ${req.params.id}`,
      });
    });
}
export async function updateProduct (req, res) {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar un producto a actualizar",
    });
  }
  if (!body.role) {
    return res.json({
      success: false,
      error: "-1",
      descripcion: "Ruta /actualizar, método PUT no autorizado",
    });
  }
  Product.findOne({ _id: req.params.id }).then((producto) => {
    (producto.timestamp = body.timestamp),
      (producto.title = body.title),
      (producto.description = body.description),
      (producto.sku = body.sku),
      (producto.photo = body.photo),
      (producto.price = body.price),
      (producto.stock = body.stock),
      producto
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: producto._id,
            message: "Product actualizado!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Hubo un error el producto no fue actualizado!",
          });
        });
  });
}
export async function deleteProduct (req, res) {
  const body = req.body;
  await Product.findOneAndDelete({ _id: req.params.id })
    .then((producto) => {
      if (!body) {
        return res.status(400).json({
          success: false,
          error: "Debes ingresar un producto a crear",
        });
      }
      return res.json({
        success: true,
        message: `Se borro el producto con ID ${req.params.id}`,
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
        error: "-2",
        descripcion: `No se encontró el producto con ID ${req.params.id}`,
      });
    });
}
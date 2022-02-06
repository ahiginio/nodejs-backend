import Category from "../models/category.model.js";
const date = new Date();

export function createCategory(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar una categoria a crear",
    });
  }
  const category = new Category(body);
  if (!category) {
    return res.status(400).json({ success: false, error: "Faltan campos" });
  }
  category
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: category._id,
        message: "Category creado!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Hubo un error, no se creo el category!",
      });
    });
}
export async function listarCategories(req, res) {
  await Category.find({})
    .then((categories) => {
      if (!categories.length) {
        return res
          .status(404)
          .json({ success: false, error: "No se encontraron categories" });
      }
      return res.status(200).json(categories);
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
}
export async function listarCategoryById(req, res) {
  await Category.findOne({ _id: req.params.id })
    .then((category) => {
      if (!req.params.id) {
        return res.status(404).json({
          success: false,
          error: "Debe ingresar un category para poder filtrar",
        });
      }
      return res.status(200).json(category);
    })
    .catch((err) => {
      return res.json({
        success: false,
        error: err,
        descripcion: `No se encontró el category con ID ${req.params.id}`,
      });
    });
}
export async function updateCategory(req, res) {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Debes ingresar un category a actualizar",
    });
  }
  if (!body.role) {
    return res.json({
      success: false,
      error: "-1",
      descripcion: "Ruta /actualizar, método PUT no autorizado",
    });
  }
  Category.findOne({ _id: req.params.id }).then((category) => {
    (category.timestamp = body.timestamp),
      (category.title = body.title),
      (category.description = body.description),
      category
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: category._id,
            message: "Category actualizado!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Hubo un error el category no fue actualizado!",
          });
        });
  });
}
export async function deleteCategory(req, res) {
  const body = req.body;
  await Category.findOneAndDelete({ _id: req.params.id })
    .then((category) => {
      if (!body) {
        return res.status(400).json({
          success: false,
          error: "Debes ingresar un category a crear",
        });
      }
      if (!body.role) {
        return res.json({
          success: false,
          error: "-1",
          descripcion: "Ruta /borrar, método DELETE no autorizado",
        });
      }
      return res.json({
        success: true,
        message: `Se borro el category con ID ${req.params.id}`,
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
        error: "-2",
        descripcion: `No se encontró el category con ID ${req.params.id}`,
      });
    });
}

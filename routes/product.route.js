import express from 'express'
import * as productController from '../controllers/product.controller.js'
import auth from "../middlewares/auth.middleware.js";

const router = express.Router()

router.post("/product", auth, productController.createProduct);
router.put("/product/:id", auth, productController.updateProduct);
router.delete("/product/:id", auth, productController.deleteProduct);
router.get("/product/:id", auth, productController.listarProductById);
router.get("/products", auth, productController.listarProducts);

export default router;

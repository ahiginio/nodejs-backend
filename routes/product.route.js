import express from 'express'
import * as productController from '../controllers/product.controller.js'
const router = express.Router()

router.post("/product", productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);
router.get("/product/:id", productController.listarProductById);
router.get("/products", productController.listarProducts);

export default router;

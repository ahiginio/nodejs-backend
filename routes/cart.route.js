import express from "express";
import * as cartController from "../controllers/cart.controller.js";
const router = express.Router();

router.post("/cart", cartController.createCart);
router.put("/cart/:id/productos", cartController.agregarProductosCart);
router.delete("/cart/:id", cartController.deleteCart);
router.delete(
  "/cart/:id/productos/:id_prod",
  cartController.deleteProductosCart
);
router.get("/cart/:id/productos", cartController.listarProductosCartById);

export default router;

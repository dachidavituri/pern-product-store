import express from "express";
import {
  createProcut,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", createProcut);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

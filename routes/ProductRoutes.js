import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
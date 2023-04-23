import { Router } from "express";
import { renderProductForm, addProduct, 
    deleteProduct, 
    getByCategory, 
    getProductById, 
    getProducts, 
    searchProduct, 
    updateProduct } from "../controllers/storeController.js";
import { authAdmin } from "../Auth/authAdmin.js";

export const StoreRouter = Router()

StoreRouter.get("/", await getProducts)
StoreRouter.get("/search", await searchProduct)
StoreRouter.get("/form",authAdmin, renderProductForm)
StoreRouter.get("/:id", await getProductById)
StoreRouter.get("/category/:category", await getByCategory)
StoreRouter.post("/form",authAdmin, await addProduct)
StoreRouter.put("/:id",authAdmin, await updateProduct)
StoreRouter.delete("/:id", authAdmin, await deleteProduct)
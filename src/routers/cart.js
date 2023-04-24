import { Router } from "express";
import { addProductInCart, deleteCart, getCart } from "../controllers/cartController.js";

export const CarRouter = Router()

CarRouter.get("/", await getCart)
CarRouter.post("/:id", await addProductInCart)
CarRouter.delete("/:id", await deleteCart)
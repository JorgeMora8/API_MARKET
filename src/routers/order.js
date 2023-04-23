import {Router} from "express"
import { createOrder, getOrders } from "../controllers/OrderController.js"

export const orderRouter = Router()

orderRouter.get("/", await getOrders)
orderRouter.post("/", await createOrder)

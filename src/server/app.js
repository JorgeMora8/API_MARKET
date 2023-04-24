import express from "express"
import {StoreRouter} from "../routers/store.js"
import {orderRouter} from "../routers/order.js"
import {userRouter} from "../routers/user.js"
import {reviewRouter} from "../routers/review.js"
import { AuthRouter } from "../routers/auth.js"
import { AuthUser } from "../Auth/authMiddleware.js"
import { CarRouter } from "../routers/cart.js"
import { Homepage } from "../controllers/homepage.js"
import {pageNotFoundGET } from "../controllers/pageNotFound.js"
import cookieParser from "cookie-parser"
import cors from "cors"


export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("./public"))
app.use(cookieParser())
app.use(cors)

app.set("view engine", "ejs")
app.set("views", "./views")

app.use("/api/cart",AuthUser, CarRouter);
app.use("/api/user",AuthUser ,userRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/products", AuthUser , StoreRouter)
app.use("/api/order", AuthUser ,orderRouter)
app.use("/api/reviews",AuthUser ,reviewRouter)


app.get("/", Homepage)
app.get("*", pageNotFoundGET)


import { Router } from "express";
import { loginUser, registerUser, renderLoginPage, renderRegisterPage } from "../controllers/AuthController.js";
export const userRouter = Router()

export const AuthRouter = Router()

//Render Views
AuthRouter.get("/login", renderLoginPage)
AuthRouter.get("/register", renderRegisterPage)

//Actions of render & login
AuthRouter.post("/register", await registerUser)
AuthRouter.post("/login", await loginUser)
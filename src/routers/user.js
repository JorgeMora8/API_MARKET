import { Router } from "express";
import { chargeCard, getReviewsFromUser, infoUser } from "../controllers/userController.js";

export const userRouter = Router()

userRouter.get("/",await infoUser)
userRouter.get("/reviews", await getReviewsFromUser)
userRouter.post("/card", await chargeCard)

userRouter.get("/logout", (req, res)=> { 
    res.clearCookie("token")
    res.render("logoutPage")
})
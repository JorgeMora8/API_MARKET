import { reviewService } from "../apiArquitecture/review/reviewService.js";
import { userService } from "../apiArquitecture/user/userService.js";

export async function infoUser(req, res){ 
    res.render("userInfo", {user:req.user})
}

export async function getReviewsFromUser(req, res) { 
    const reviewList = await reviewService.getReviewByAuthor(req.user.email)
    if(reviewList.length == 0) { 
        res.status(200).json({User_reviews:"This user has no reviews uploaded"})
    }else{
    res.send(reviewList)
    }
}

export async function chargeCard(req, res){ 
    const cardID = req.body.card_code
    const cardPassword = req.body.card_password
    await userService.chargeCard(req.user.id, req.body.cant)
}   
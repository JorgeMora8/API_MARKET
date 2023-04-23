import Review from "../apiArquitecture/review/review.js"
import createID from "../resources/createID.js"


//This function will create the review and return its DTO
export default function createReview(reviewData, userAuthor){ 
    
    //Adding the id to the review
    reviewData['id'] = createID()
    reviewData['author'] = userAuthor
    const newReview = new Review(reviewData)
    return newReview
}
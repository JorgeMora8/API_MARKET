import {orderService} from "../apiArquitecture/order/orderService.js"
import { loggerError } from "../loggers/loggerConfig.js";
import { cartService } from "../apiArquitecture/cart/cartService.js";
import { creditCartFormValidation } from "../resources/shoppingOrderFormValidation.js";
import { getTotalPrice } from "../resources/getTotalPrice.js";

export async function getOrders(req, res){ 
    try{ 
        const cart = await cartService.getCarByUser(req.user.id); 
        let total = getTotalPrice(cart['prods'])
        res.render("infoOrder", {products: cart['prods'], total:total.toFixed(2), user:req.user, message:null})
    }   catch(error){
        res.render("errorPage", {message:error.message})
        loggerError.error(`ERROR IN ORDER PROCESS: ${error.message}`)
    }
}


export async function createOrder(req, res){

    const clientName = req.user.name
    const clientEmail = req.user.email
    const clientId = req.user.id 

    try{ 
        creditCartFormValidation(req.body);
        await orderService.createOrder(clientId, clientName, clientEmail)
        res.render("orderFinished")
    }   catch(error){ 
            const cart = await cartService.getCarByUser(req.user.id); 
            let total = getTotalPrice(cart['prods'])
            res.render("infoOrder", {products: cart['prods'], total:total.toFixed(2), user:req.user, message:error.message})
    }
}
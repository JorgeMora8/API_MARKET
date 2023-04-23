import { cartService } from "../apiArquitecture/cart/cartService.js";
import {Store} from "../apiArquitecture/product/productService.js"
import { loggerError } from "../loggers/loggerConfig.js";

export async function getCart(req, res){ 
    try{
        const userId = req.user.id
        const car = await cartService.getCarByUser(userId)
        res.render("cartView", {"cart":car['prods']})
    }   catch(error){
        res.render("errorPage", {message:error.message})
        loggerError.error(`USER CART ERROR: ${error.message}`)
    }
}

export async function addProductInCart(req, res){ 
    try{
        const product = await Store.getById(req.params.id)
        await cartService.addProduct(req.user.id, product)
        res.status(201).json({ 
        State:"Success", 
        detail:"Product added succesfully"
    })
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
        loggerError.error(`USER CART ERROR: ${error.message}`)
    }
}

export async function deleteCart(req, res){ 
    try{
        await cartService.deleteProduct(req.user.id, req.params.id)
        res.status(204).json({"Success":"Product deleted"})
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
        loggerError.error(`USER CART ERROR: ${error.message}`)
    }
}
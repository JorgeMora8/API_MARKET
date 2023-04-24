import OrderRepository from "./orderRepository.js"
import { OrderDao } from "../../persistence/DAO.js"
import {cartService} from "../cart/cartService.js"
import createID from "../../resources/createID.js"
import Order from "./order.js"
import { getTotalPrice } from "../../resources/getTotalPrice.js"
import { sendEmail } from "../../nodemailer/nodemailerConfig.js"

class OrderService{ 
    constructor(){ 
        this.repository = new OrderRepository(OrderDao)
    }

    async createOrder( clientId ,clientName, clientEmail){ 
        const car = await cartService.getCarByUser(clientId)
        const productInCar = car['prods']
        const total = getTotalPrice(productInCar)

        const OrderData = { 
            id:createID(), 
            clientName:clientName, 
            clientEmail:clientEmail, 
            date: new Date(), 
            prods: productInCar, 
            total:total
        }

        //Create the order instance
        const newOrder = new Order(OrderData)

        //Save the order
        await this.repository.createOrder(newOrder)

        //Send the emails
        // await sendEmail(clientEmail, productInCar, total)

        //Clear up the cart
        await cartService.emptyCar(car['id'])
        

    }
}

export const orderService = new OrderService()

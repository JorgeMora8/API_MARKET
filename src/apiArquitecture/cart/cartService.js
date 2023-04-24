import CartRepository from "./cartRepository.js";
import { CarDao } from "../../persistence/DAO.js";
import Cart from "./cart.js";
import createID from "../../resources/createID.js";

export default class CartService{ 
    constructor(){ 
        this.repository = new CartRepository(CarDao)
    }

    async getCarByUser(carId){ 
        const car = await this.repository.getCar(carId)
        return car.asDTO()
    }

    async createCar(userId){  
        const carData = { 
            id:createID(), 
            clientId: userId
        }
        const newCar = new Cart(carData)
        await this.repository.saveCar(newCar)
    }

    async addProduct(carId, productData){ 
        await this.repository.addProduct(carId, productData)
    }

    async deleteProduct(carId, productId){ 
        await this.repository.deleteProduct(carId, productId)
    }

    async emptyCar(carId){ 
        await this.repository.deleteAllProduct(carId)
    }

}   

export const cartService = new CartService()
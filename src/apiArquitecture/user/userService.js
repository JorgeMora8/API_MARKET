import createUser from "../../utils/createUser.js"
import createToken from "../../Auth/token.js"
import UserRepository from "./userRepository.js"
import { UserDao } from "../../persistence/DAO.js"
import { cartService } from "../cart/cartService.js"
import {userValidations} from "./userValidation.js"

export default class UserService { 
    constructor(){ 
        this.repository = new UserRepository(UserDao)
    }

    async saveUser(user){
        await userValidations(user)
        await this.repository.checkIfUserExits(user.email)
        const userCreated = await createUser(user)
        await this.repository.save(userCreated)
        await cartService.createCar(userCreated.asDTO()['id'])
        const token = await createToken(user.email)

        return token
}

    async getByEmail(userEmail){ 
        const user = await this.repository.getByEmail(userEmail)
        return user.asDTO()

    }
    
    async getById(userId){ 
        const user = await this.repository.getById(userId)
        return await user.asDTO()
    }

    async chargeCard(userId, quanity){ 
        await this.repository.chargeCard(userId, quanity)
    }

    async getAllUser(){ 
        let userList =  await this.repository.getAllUser()
        return userList.map(user => user.asDTO())
    }
}

export const userService = new UserService()
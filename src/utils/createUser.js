import User from "../apiArquitecture/user/user.js"
import { hashPassword } from "../resources/hashPassword.js"

export default async function createUser(userData){
    const passwordHashed = await hashPassword(userData.password)
    const newUser = new User({ 
        name:userData.name, 
        lastname: userData.lastname, 
        email: userData.email, 
        password: passwordHashed, 
        admin:userData.admin,
        card:userData.card, 
        id:userData.id
    })

    return newUser
}
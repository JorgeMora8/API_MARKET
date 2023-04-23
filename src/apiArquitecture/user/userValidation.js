import createID from "../../resources/createID.js"
import { hashPassword } from "../../resources/hashPassword.js"
import { userService } from "./userService.js"

export async function userValidations(user){ 
    if (!user.name) throw new Error("Name is missing")
    if (!user.lastname) throw new Error("lastname is missing")
    if (!user.email) throw new Error("email is missing")
    if (!user.password) throw new Error("password is missing")
    if (user.admin == null || undefined) throw new Error("Admin is missing")

    //Adding values
    user['id'] = createID()
    user['card'] = 0

    const newPassword = await hashPassword(user['password'])
    user["password"] == newPassword
    return user
}

export async function uniqueUser(userEmail) { 
        const users = await userService.getAllUser()
        users.forEach(user => { 
            if (user.email == userEmail) throw new Error("This user is already in use")
        })
}
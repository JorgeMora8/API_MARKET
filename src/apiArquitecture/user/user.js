
export default class User{ 
    #id
    #name
    #lastname
    #email
    #password
    #admin
    #card
    constructor({name, lastname, email, password, admin, card, id}){ 
        this.#id = id
        this.#name = name
        this.#lastname = lastname
        this.#email = email
        this.#password = password
        this.#admin = admin
        this.#card = card
        this.#id = id
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.#id, 
            name: this.#name, 
            lastname: this.#lastname, 
            email: this.#email, 
            password: this.#password, 
            admin: this.#admin, 
            card: this.#card
        })


    }
}
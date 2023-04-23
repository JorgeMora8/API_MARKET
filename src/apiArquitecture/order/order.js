export default class Order{ 
    constructor({clientName, clientEmail, date, prods, total, id}){ 
        this.clientName = clientName 
        this.clientEmail = clientEmail 
        this.date = date 
        this.prods = prods
        this.total = total 
        this.id = id
    }

    asDTO(){ 
        return Object.freeze({ 
            id:this.id, 
            clientName: this.clientName, 
            clientEmail: this.clientEmail, 
            date: this.date, 
            prods: this.prods, 
            total: this.total
        })
    }
}
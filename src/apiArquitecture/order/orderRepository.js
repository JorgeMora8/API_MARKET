export default class OrderRepository{ 
    constructor(dao){ 
        this.dao = dao
    }

    async createOrder(Order){ 
       await this.dao.save(Order) 
    }
}
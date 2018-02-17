var OrderManager = (function() {

  return class OrderManager {
    constructor() {
      this.orders = [];
    }

    getOpenOrder(name) {
      return this.orders.filter( order => order.open && order.customer.name === name);
    }

    addOrder(order) {
      this.orders.push(order);
    }

    updateOrder(orderUpdate) {
      let order = this.orders.filter(order => order.customer.name === orderUpdate.name);
      [order] = [orderUpdate];
    }

    addItem(name, items) {

    }
  }



})()  
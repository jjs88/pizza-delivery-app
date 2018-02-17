var Order = (function() {

  return class Order {
    constructor(customer) {
      this.open = true;
      this.customer = customer;
      this.pizza = {
        toppings: []
      };
    }

    addBase(base) {
      this.pizza.base = base;
    }

    addToppings(toppings) {
      this.pizza.toppings = [];
      toppings.forEach(topping => this.pizza.toppings.push(topping));
    }

    clearToppings() {
      this.pizza.toppings = [];
    }

    getToppings() {
      return this.pizza.toppings.map(topping => topping);
    }
  }


})();
var CustomerManager = (function() {

  return class CustomerManager {
    constructor(customers) {
      this.customers = [];

      for(var prop in customers) {
        customers[prop].forEach((customer) => {
          this.customers.push(new Customer(customer.name));
        })
      }


    }


    getCustomerByName(name) {
      return this.customers.filter(customer => customer.name === name);
    }

    getCurrentCustomer() {
      return this.customers.filter(customer => customer.isWaiting === false);
    }

    // removeCurrentCustomer(selector) {
    //   document.querySelector(selector).parentNode.removeChild(document.querySelector(selector));
    // }

    // getCurrentCustomerFromDOM(selector) {
    //   return document.querySelector(selector);
    // }


  }


})();
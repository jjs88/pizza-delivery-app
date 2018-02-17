var Route = (function() {

  return class Route {
    constructor(app) {
      //pass in the app so the routes have access to the app properties
      this.app = app;
    }

    render(route) {
      if(route === 'home') this.home();
      if(route === 'start') this.base();
      if(route === 'to toppings') this.toppings();
      if(route === 'summary') this.summary();
      if(route === 'submit') this.submit();
    }

    welcome() {
      let temp = `<h3 class="opening-title">Please select a customer to begin order</h3>`;
      this.app.content.innerHTML = temp;
    }

    home() {

      let temp = `
      <h3>Hello, ${this.app.customer.name}</h3>
      <p>Please click start to begin your order</p>
      <button class="button" data-page="start">Start</button>`;
      
      this.app.content.style.opacity = '0';
      this.app.content.style.opacity = '1';
      this.app.content.innerHTML = temp;
      // this.app.content.style.opacity = '1';

    }

    base() {

      let temp = `
      <h1>Please select a base</h1>
      <div class="radio-selection">
        <div class="radio-item">
          <input type="radio" name="base" value="thin crust">
          <label>Thin Crust</label>
        </div>
        <div class="radio-item">
          <input type="radio" name="base" value="thick crust">
          <label>Thick Crust</label>
        </div>
        <div class="radio-item">
          <input type="radio" name="base" value="flatbread">
          <label>Flatbread</label>
        </div>
      </div>
      <div class="fixed-bottom">
        <div>
          <button class="button-radio button" data-page="home">back</button>
        </div>
        <div>
          <button class="button-radio button" data-page="to toppings">to toppings</button>
        </div>
      </div>`;

      this.app.content.innerHTML = temp;
    }

    toppings() {

      let temp = `
      <h1>Please select toppings</h1>
      <div class="checkboxes">
        <div class="checkbox-container">
          <input type="checkbox" id="pepperoni" name="toppings" value="pepperoni">
          <label for="pepperoni">
            <span class="box"></span>
            Pepperoni
          </label>
        </div>
        <div class="checkbox-container">
        <input type="checkbox" id="mushrooms" name="toppings" value="mushrooms">
        <label for="mushrooms">
          <span class="box"></span>
          Mushrooms  
        </label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="onions" name="toppings" value="onions">
          <label for="onions">
            <span class="box"></span>
            Onions
          </label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="sausage" name="toppings" value="sausage">
          <label for="sausage">
            <span class="box"></span>
            Sausage
          </label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="bacon" name="toppings" value="bacon">
          <label for="bacon">
            <span class="box"></span>
            Bacon
          </label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="extra-cheese" name="toppings" value="extra cheese">
          <label for="extra-cheese">
            <span class="box"></span>
            Extra Cheese
          </label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="black-olives" name="toppings" value = "black olives">
          <label for="black-olives">
            <span class="box"></span>
            Black Olives
          </label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="green-peppers" name="toppings" value="green peppers">
          <label for="green-peppers">
            <span class="box"></span>
            Green Peppers
          </label>
        </div>
      </div>
      <div class="fixed-bottom">
        <div>
          <button class="button-radio button" data-page="start">back</button>
        </div>
        <div>
          <button class="button-radio button" data-page="summary">summary</button>
        </div>
      </div>`;

      this.app.content.innerHTML = temp;
    }
 
    summary() {

      let toppingsHTML = this.app.order.pizza.toppings.map(topping => {
        return `<li class="list-item">${topping}</li>`
      }).join('');

      let temp = `
        <h1>Summary of your pizza order</h1>
        <div class="summary-container">
          <div>
            <h3>Base</h3>
            <li class="list-item">${this.app.order.pizza.base}</li>
          </div>
          <div>
            <h3>Toppings</h3>
            ${toppingsHTML}
          </div>
        </div>
        <div class="fixed-bottom">
        <div>
          <button class="button" data-page="to toppings">back</button>
        </div>
        <div>
          <button class="button" data-page="submit">Submit</button>
        </div>
      </div>`;

      this.app.content.innerHTML = temp;   
    }

    order() {
      let toppings = this.app.order.pizza.toppings.map((topping) => {
        return topping;
      }).join(', ');

      let temp = `
          <span class="order-name">${this.app.customer.name}</span>
          <span class="base">: ${ this.app.order.pizza.base} - </span>
          <span class="toppings">${toppings}</span>`;

      let container = this.app.uiManager.addContainer(this.app.ordersContent, '', 'order');
      container.setHTML(temp);
      
    }

    submit() {

      let temp = `<p>Thank you for your order ${this.app.customer.name}!</p>
      <p>Please take a seat and wait for your number to be called.</p>
      <p>Welcome page will appear shortly</p>`

      this.app.content.innerHTML = temp;


      //render the welcome page after 4 seconds to begin start of new order
      setTimeout(()=> {
        // reset inProcess so next customer can be selected
        this.app.inProcess = false;
        //remove the customer from the list since done ordering
        this.app.removeCustomer();

        //add to Order Manager
        this.app.orderManager.addOrder(this.app.order);

        //add order to DOM
        this.order();

        //re-render the welcome screen
        this.welcome()
      },4000);
      
    }
  }


})();
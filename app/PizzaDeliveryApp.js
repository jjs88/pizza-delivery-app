var PizzaDeliveryApp = (function() {

  return class PizzaDeliveryApp {
    constructor(name) {
      this.name = name;
    }

    init(customerData) {
      this.uiManager = new UIManager();
      this.route = new Route(this);
      this.orderManager = new OrderManager();
      this.setUI(); 
      this.loadData(customerData);
      this.setButtonClicks();
    } //end of init



    setButtonClicks() {
      this.content.addEventListener('click', (e)=> {
        // only register events for buttons on the content div
        if(e.target.nodeName === 'BUTTON') {

          //start a new order if there isn't one already in process
          if(e.target.dataset.page === 'start' && !this.inProcess) {    
              this.startOrder();
          }
              
          if(e.target.dataset.page === 'to toppings') {
            //add base to order
            if(document.querySelector('input[type="radio"]:checked')) {
              let base = document.querySelector('input[type="radio"]:checked').value;
              this.order.addBase(base);
            }
          }
          
          if(e.target.dataset.page === 'summary') {
            //add toppings to order
            let toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((item) => {
              return item.value;
            });
            //clear out toppings first (in case back button was hit)
            this.order.clearToppings();
            //add toppings
            this.order.addToppings(toppings);
          }

          this.page = e.target.dataset.page;
          //will be an open order, so don't allow going back to home page at this point
          if(this.page !== 'home') {
            this.route.render(this.page);
          }
        }
      })
    }


    loadData(customerData) {

      this.dal = new DataAccessLayer(customerData);

      //get customers and add to customerManager and populate the list
      this.dal.getData().then(()=> {

        this.customerManager = new CustomerManager(this.dal.customerData);
        this.populateCustomerList(this.customerManager.customers);

      });
    }

    setUI() {
      // main container for app
      let container = this.uiManager.addContainer(document.querySelector('body'), '', 'container').element;
      // everything else depends on it
      this.uiManager.addContainer(container, '', 'customer-list');
      this.uiManager.addContainer(container, '', 'content');
      this.uiManager.addContainer(container, '', 'orders-content');
      this.ordersContent = document.querySelector('.orders-content');
      this.uiManager.addTitle(this.ordersContent, 'h1', 'Orders', 'orders-title');
      this.content = document.querySelector('.content');
      this.uiManager.addTitle(document.querySelector('.customer-list'), 'h1', 'Customer List', 'customer-list-title');
      this.uiManager.addTitle(this.content, 'h3', 'Please select a customer to begin order', 'opening-title')
    }

    startOrder() {
      this.order = new Order(this.customer);
      this.inProcess = true;
    }

    selectedCustomer(customer) {
      if(this.selected) {
        this.selected.style.display = 'block';
      }
      this.selected = customer;
      this.selected.style.display = 'none';
      // console.log(this.selected);
    }

    removeCustomer() {
      this.selected.parentNode.removeChild(this.selected);
    }

    populateCustomerList(customers) {

        customers.forEach(customer => {
          this.uiManager.addListItem(document.querySelector('.customer-list'), customer.name, 'list-item', [
            { 
              name: 'click',
              handler: (e)=> {     
                //only allow customer to be selected if current order is complete
                if(!this.inProcess) {
                  [this.customer] = this.customerManager.getCustomerByName(e.target.textContent);
                  this.selectedCustomer(e.target);
                  this.route.render('home');
                }  
              }
            }
          ]
        );
      }); 
    }
  }










  
})()
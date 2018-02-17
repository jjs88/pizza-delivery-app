(function() {
  let app = new PizzaDeliveryApp('Pizza Delivery');

  if(window.location.href === 'https://jjs88.github.io/pizza-delivery-app/') {
    //pass in the absolute path if on github since relative paths use the root not the project folder
    app.init('https://jjs88.github.io/pizza-delivery-app//data/customers.json');
  } else {
    app.init('../data/customers.json');
  }
  
})();
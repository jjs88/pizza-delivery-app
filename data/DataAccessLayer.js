var DataAccessLayer = (function() {


  return class DataAccessLayer {
    constructor(url) {
      this.url = url;
    }

    getData() {
      return new Promise((resolve, reject) => {

        fetch(this.url, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            this.customerData = data;
            resolve();
          })
      })
    }
  }


})()
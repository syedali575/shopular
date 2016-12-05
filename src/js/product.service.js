(function() {
  'use strict';

  // To retrieve forsale list of items from local storage to display on refresh

  angular.module("shop")
  .factory("ProductService", ProductService);

  function ProductService(){
    var storedItems = JSON.parse(localStorage.getItem("items"));

    // var storedItems = JSON.parse(localStorage.getItem("items"));

    var items = storedItems || [

      { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
      { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
      { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
      { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
      { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
      { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
      { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
      { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
      { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
      { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
      { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
      { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }

    ];

    // All functions created in services must be added here; so they are accessible in controller.
    return {
      getAll: getAll,
      addNew: addNew,
      update: update
    };



    /**
    * To return list of all items
    * @return {Array} list of all items in inventory
    */
    function getAll() {
      return items;
    }



    /**
    * Adds a new forsale item to inventory
    * @param {Object} product name, price, quatity, discount, color must be provided
    */
    function addNew(product) {
      items.push({
        name: product.name,
        price: Number(product.price),
        quantity: Number(product.quantity),
        discount: Number(product.discount),
        color:product.color
      });
      // calling update function so we can add and update at the same time
      update();
    }


    /**
    * To store current inventory list to local storage
    * @param {Array} [description] List of forsale items in inventory
    */
    function update(){
      // console.log('array', items);
      localStorage.setItem("items", angular.toJson(items));
    }

  }


}());

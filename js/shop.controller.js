(function() {
  'use strict';


  angular.module("shop")
  .controller("ShopController", ShopController);

  // Injecting ProductService to ShopController
  ShopController.$inject = ["ProductService"];


  // ProductService must be passed as argument here so we can access function in services in controller.
  function ShopController(ProductService){

    this.sortOrder = "price";
    this.newItem = {};
    this.taxRate = 1.0575;

    // Calling getAll() to retrieve list of all items from service.
    this.items = ProductService.getAll();


    /**
    * Calling addNew() function in service
    * @param {Object} product product must be used as argument to connect this function to service.
    */
    this.addProduct = function addProduct(){
      ProductService.addNew(product);
    };

    /**
    * Sorts products forsale by product property(e.g. product price)
    * @param  {String} sortOrder product property to sort by
    */
    this.sortCategory = function sortCategory(sortOrder){
      if(this.sortOrder === sortOrder){
        this.sortOrder="-" + sortOrder;
      }
      else{
        this.sortOrder = sortOrder;
      }
    };



  }

}());

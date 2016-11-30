(function() {
  'use strict';

  console.log("Shop Controller");

  angular.module("shop")
  .controller("ShopController", ShopController);

  ShopController.$inject = ["ProductService"];


  function ShopController(ProductService){
    this.sortOrder = "price";
    this.newItem = {};

    this.taxRate = 1.0575;


    /**
     * [addProduct description]
     * @param {[type]} product [description]
     */
    this.addProduct = function addProduct(product){
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

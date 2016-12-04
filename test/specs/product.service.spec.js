(function() {
  'use strict';

  var expect = chai.expect;


  describe("product service", function(){
    var ProductService;

    beforeEach(function resetLocalStorage() {
      localStorage.setItem("items", "[]");
    });

    beforeEach(module("shop"));

    beforeEach(inject(function(_ProductService_){

      ProductService = _ProductService_;
    }));



    it("Should be able to get list of forsale items", function(){
      var result = ProductService.getAll();
      expect(result).to.be.an('array');
      expect(result.length).to.equal(0);
    });


    it("Should add a new item to forsale product list", function(){
      var newProduct = { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "yellow", "discount": 0 };
      ProductService.addNew(newProduct);
      var updatedList = ProductService.getAll();
      expect(updatedList.length).to.equal(1);
      expect(updatedList[0].color).to.equal("yellow");
      expect(updatedList[0].price).to.be.a("number");
      expect(updatedList[0].name).to.be.a("string");
    });


    it("Should return undefined if a string is passed as an argument", function(){
      var result = ProductService.addNew("apple");
      expect(result).to.equal(undefined);
    });


    it("Should save to local storage an array of forsale items", function(){
      // check that local storage is an empty array
      var localItems = JSON.parse(localStorage.getItem("items"));
      // add an item
      var newProduct = { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "yellow", "discount": 0 };
      ProductService.addNew(newProduct);
      // check that that item is now IN LOCAL STORAGE
      var newLocalStorage = JSON.parse(localStorage.getItem("items"));
      expect(newLocalStorage.length).to.equal(1);
      expect(newLocalStorage).to.be.an("array");
      expect(newLocalStorage[0].name).to.equal("iPhone");
    });


  });

}());

(function() {
  'use strict';

  var expect = chai.expect;

  describe("ShopController", function(){
    var ShopController;
    var mockProductService = {};

    beforeEach(module("shop"));

    beforeEach(module(function($provide){
      $provide.value("ProductService", mockProductService);
    }));

    beforeEach(inject(function($controller){
      mockProductService.getAll = function(){
        return [
          { name: "Boat", price: 100, quantity: 1, color: "Blue"}
        ];
      };
      mockProductService.addNew = function(argOne) {
        mockProductService.addNew.numTimesCalled++;
        mockProductService.addNew.lastArgument = argOne;
      };

      ShopController = $controller("ShopController");
    }));


    it("Should have correct scope variables", function(){
      expect(ShopController.items).to.be.an("array");
      expect(ShopController.items.length).to.equal(1);


    });

    it("Should require proper data type for each property", function(){
      expect(typeof(ShopController.items[0].name)).to.be.a("string");
      expect(typeof(ShopController.items[0].color)).to.be.a("string");
      expect(ShopController.items[0].price).to.equal(100);
      expect(ShopController.items[0].quantity).to.equal(1);
    });


    it("Should add items into array from service function", function(){

        var addNewItem={};
        ShopController.newItem.plane = "Jet";
        ShopController.addProduct(addNewItem);
        expect(ShopController.newItem.plane).to.equal("Jet");
    });


  });
}());

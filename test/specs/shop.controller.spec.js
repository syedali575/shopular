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

      mockProductService.addNew.numTimesCalled = 0;

      ShopController = $controller("ShopController");
    }));


    it("Should have correct scope variables", function(){
      expect(ShopController.items).to.be.an("array");
      expect(ShopController.items.length).to.equal(1);
      expect(ShopController.sortOrder).to.equal("price");
      expect(ShopController.taxRate).to.equal(1.0575);

    });

    it("Should require proper data type for each property", function(){
      expect(typeof(ShopController.items[0].name)).to.be.a("string");
      expect(typeof(ShopController.items[0].color)).to.be.a("string");
      expect(ShopController.items[0].price).to.equal(100);
      expect(ShopController.items[0].quantity).to.equal(1);
    });


    it("Should add items into array from service function", function(){

        var addNewItem={plane: 'Jet'};
        ShopController.addProduct(addNewItem);
        expect(mockProductService.addNew.lastArgument.plane).to.equal("Jet");
        expect(mockProductService.addNew.numTimesCalled).to.equal(1);
    });



    it("Should reset sort order if I pass price as an argument", function(){
      ShopController.sortCategory("price");
      expect(ShopController.sortOrder).to.equal("-price");
    });


    it("Should sort products by argument", function(){
      ShopController.sortCategory("name");
      expect(ShopController.sortOrder).to.equal("name");
    });





  });
}());

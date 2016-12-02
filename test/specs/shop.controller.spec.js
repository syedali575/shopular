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

    it("should add 1 + 1", function(){
      var result = 1 + 1;
      expect(result).to.equal(2);
    });



  });
}());

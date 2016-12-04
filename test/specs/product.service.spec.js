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
      expect(result.length).to.equal(12);
      expect(result[0].name).to.be.a("string");
      expect(result[0].price).to.be.a("number");
    });




    it("Should add a new item to forsale product list", function(){
      var newProduct = { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "yellow", "discount": 0 };
      ProductService.addNew(newProduct);
      var updatedList = ProductService.getAll();
      expect(updatedList.length).to.equal(13);
      expect(updatedList[12].color).to.equal("yellow");
      expect(updatedList[12].price).to.be.a("number");
      expect(updatedList[12].name).to.be.a("string");
    });



      it("Should save to local storage an array of forsale items after a new product is added", function(){
        var items = ProductService.getAll();
        ProductService.update();
        var localItems = JSON.parse(localStorage.getItem("items"));
        console.log(localItems);



      });










  });

}());

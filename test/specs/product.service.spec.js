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



    it("should be able to get an array of items", function(){
      var result = ProductService.getAll();
      expect(result).to.be.an('array');
      expect(result.length).to.equal(12);
      expect(result[0].name).to.be.a("string");
      expect(result[0].price).to.be.a("number");

    });

    describe("Saves array of items to local storage", function(){

      var items = [{}];
      //giving local storage a empty array
      it("Should save an array to local storage", function(){
        ProductService.update();
        expect(JSON.parse(localStorage.getItem("items")).length).to.equal(1);

      });

    });
  });

}());

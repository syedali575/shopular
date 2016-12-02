(function() {
  'use strict';

  var expect = chai.expect;


  describe("product service", function(){
    var ProductService;

    beforeEach(module("shop"));

    beforeEach(inject(function(_ProductService_){

      ProductService = _ProductService_;
    }));




    it("should be able to get an array of products", function(){
      var result = ProductService.getAll();
      expect(result).to.be.an('array');





    });

  });




}());

(function() {
  'use strict';

  console.log("user controller");


    angular.module("shop")
    .controller("UserController", UserController);


    UserController.$inject=["UserService"];

    function UserController(){
      function serviceUserLogin(){
          UserService.userLogin(login);
      }


    }

}());

(function() {
  'use strict';

  console.log("user controller");


  angular.module("shop")
  .controller("UserController", UserController);

  


  UserController.$inject=["UserService"];

  function UserController(UserService){



    this.newUser = {};
    this.username = UserService.userInfo;


    /**
    * Calling userlogin function in UserService by this function
    * @param  {Object} login argument must be same as UserService.userlogin
    */
    function serviceUserLogin(login){
      UserService.userLogin(login);
      console.log("Am I working?");
    }


  }

}());

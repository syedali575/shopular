(function() {
  'use strict';

  console.log("user service");

  angular.module("shop")
  .factory("UserService", UserService);


  function UserService(){

    var userInfo = [{}];

    return {
      userLogin: userLogin

    };


    function userLogin(login){
      userInfo.push({
        user: user.name,
        time: Date.now(),
      });



    }

  }


}());

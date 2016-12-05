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

    /**
    * Adds user to userInfo array.
    * @param  {[Object} user login name of the user
    */
    function userLogin(login){
      userInfo.push({
        user: user.name,
        time: Date.now(),
      });
    }

    console.log(userInfo);

  }


}());

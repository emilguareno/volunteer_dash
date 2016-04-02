(function() {
  'use strict';
  angular.module('myApp').factory('userService', userService);

  userService.$inject = ['$http', '$q'];

  function userService($http, $q) {
    var service = {
      getAllUsers: getAllUsers,
      getAllUserNames: getAllUserNames
    };
    return service;
    
    //TODO get current user on app init
    // $http.get('/api/me').then(function(me) {
    //   this.currentUser = me.data;
    //   this.isAdmin = this.currentUser.role === 'admin';
    // });

    function getAllUsers() {
      var deferred = $q.defer();
      $http.get('/api/users').then(function(users) {
        deferred.resolve(users.data);
      });
      return deferred.promise;
    }

    function getAllUserNames() {
      return getAllUsers().then(function(users) {
        var userNames = users.map(function(user) {
          var userInfo = {
            id: user._id,
            name: user[user.method].name
          };
          return userInfo;
        });
        return userNames;
      });
    }
  }
})();
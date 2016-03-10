myApp.service('userService', ['$http', '$q', function($http, $q) {
  this.getAllUsers = function() {
    var deferred = $q.defer();
    $http.get('/api/users').then(function(users) {
      deferred.resolve(users.data);
    }.bind(this));
    return deferred.promise;
  };
  this.getAllUserNames = function() {
    return this.getAllUsers().then(function(users) {
      var userNames = users.map(function(user) {
        var userInfo = {
          id: user._id,
          name: user[user.method].name
        };
        return userInfo;
      });
      return userNames;
    });
  };
}]);
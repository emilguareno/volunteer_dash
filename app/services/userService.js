myApp.service('userService', ['$http', '$q', function($http, $q) {
  this.getAllUsers = function() {
    var deferred = $q.defer();
    if (this.users) {
      deferred.resolve(this.users);
    } else {
      $http.get('/api/users').then(function(users) {
        this.users = users;
        deferred.resolve(users.data);
      }.bind(this));
    }
    return deferred.promise;
  };
  this.getAllUserNames = function() {
    return this.getAllUsers().then(function(users) {
      var userNames = users.map(function(user) {
        var userInfo = {
          id: user._id
        };
        if (user.facebook) {
          userInfo.name = user.facebook.name;
        }
        else if (user.twitter) {
          userInfo.name = user.twitter.displayName;
        } else if (user.local) {
          userInfo.name =  user.local.name;
        }
        return userInfo;
      });
      return userNames;
    });
  };
}]);
myApp.service('shiftService', ['$http', '$q', function($http, $q){
  this.getAllShifts = function(){
    var deferred = $q.defer();
    $http.get('/api/shifts').then(function(shifts){
      deferred.resolve(shifts.data);
    });
    return deferred.promise;
  };
  this.createShift = function(info){
    return $http.post('/api/shifts/add', info);
  };
}]);
myApp.service('shiftService', ['$http', '$q', function($http, $q){
  this.getAllShifts = function(){
    var deferred = $q.defer();
    $http.get('/api/shifts').then(function(shifts){
      shifts = shifts.data.map(function(shift){
        shift.percent = shift.volunteers.length / shift.volunteersNeeded * 100;
        return shift;
      });
      deferred.resolve(shifts);
    });
    return deferred.promise;
  };
  this.createShift = function(info){
    return $http.post('/api/shifts/add', info);
  };
}]);
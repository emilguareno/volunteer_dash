(function() {
  'use strict';
  angular.module('myApp').factory('shiftService', shiftService);

  shiftService.$inject = ['$http', '$q'];

  function shiftService($http, $q) {
    var service = {
      getAllShifts: getAllShifts,
      createShift: createShift
    };
    return service;

    function getAllShifts() {
      var deferred = $q.defer();
      $http.get('/api/shifts').then(function(shifts) {
        shifts = shifts.data.map(function(shift) {
          shift.percent = shift.volunteers.length / shift.volunteersNeeded * 100;
          return shift;
        });
        deferred.resolve(shifts);
      });
      return deferred.promise;
    }

    function createShift(info) {
      return $http.post('/api/shifts/add', info);
    }
  }
})();
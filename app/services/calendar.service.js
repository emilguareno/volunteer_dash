(function() {
  'use strict';
  angular.module('myApp').factory('calendarService', calendarService);

  calendarService.$inject = ['$http', 'shiftService'];

  function calendarService($http, shiftService) {
    var service = {
      getAllShifts: getAllShifts
    };
    return service;

    function getAllShifts() {
      return shiftService.getAllShifts().then(function(shifts) {
        return formatData(shifts);
      });
    }

    function formatData(shifts) {
      return shifts.map(function(shift) {
        shift.type = function() {
          if (shift.percent === 100) {
            return 'success';
          } else if (shift.percent >= 50) {
            return 'warning';
          } else {
            return 'important';
          }
        }();
        shift.startsAt = new Date(shift.startsAt);
        shift.endsAt = new Date(shift.endsAt);
        return shift;
      });
    }

  }
})();
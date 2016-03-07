myApp.service('calendarService', ['$http', 'shiftService', function($http, shiftService) {
  var formatData = function(shifts) {
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
  };
  this.getAllShifts = function() {
    return shiftService.getAllShifts().then(function(shifts) {
      return formatData(shifts);
    });
  };
}]);
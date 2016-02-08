myApp.controller('calendarController', ['$scope', 'moment', function($scope, moment) {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var year = dateObj.getUTCFullYear();

  $scope.month = month;
  $scope.year = year;

  $scope.users = {
    "name" : {
        "first" : "Wendy",
        "last" : "Peralta"
    },
    "roles" : [
        "admin",
        "volunteer"
    ],
    "shifts" : [
        {
            "name" : "Morning",
            "time" : {
                "start" : new Date("2016-02-06T18:00:00.000Z"),
                "end" : new Date("2016-02-06T19:00:00.000Z")
            }
        },
        {
            "name" : "Afternoon",
            "time" : {
                "start" : new Date("2016-02-13T21:00:00.000Z"),
                "end" : new Date("2016-02-13T22:00:00.000Z")
            }
        }
    ]
  };

  //calendar variables
  this.calendarView = 'month';
  this.calendarDate = new Date();
  this.events = [];
  for(var i = 0; i < $scope.users.shifts.length; i++){
    var eventObject = {
      title: $scope.users.shifts[i].name + ' shift',
      type: 'info',
      startsAt: $scope.users.shifts[i].time.start,
      endsAt: $scope.users.shifts[i].time.end,
      recursOn: 'month',
      draggable: false,
      resizable: true
    };
    this.events.push(eventObject);
  }
}]).filter('monthName', [function() {
    return function (monthNumber) { //1 = January
        var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December' ];
        return monthNames[monthNumber - 1];
    };
}]);

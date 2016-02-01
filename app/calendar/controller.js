myApp.controller('calendarController', ['$scope', 'moment', function($scope, moment) {
  $scope.todayDate = moment().format('LL');

  //calendar variables
  this.calendarView = 'month';
  this.calendarDate = new Date();
  this.events = [
    {
        title: 'Morning shift',
        type: 'info',
        startsAt: moment().add(7, 'days').toDate(),
        endsAt: moment().add(7, 'days').add(4, 'hours').toDate(),
        recursOn: 'month',
        draggable: false,
        resizable: true
      }
  ];
}]);

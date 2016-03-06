myApp.controller('calendarController', ['$scope', 'moment', 'calendarService', function($scope, moment, calendarService) {
  $scope.todayDate = moment().format('LL');

  //calendar variables
  this.calendarView = 'month';
  this.calendarDate = new Date();
  calendarService.getAllShifts().then(function(shifts){
    this.events = shifts;
  }.bind(this));
  this.eventClicked = function(event){
    console.log(event);
  };
}]);

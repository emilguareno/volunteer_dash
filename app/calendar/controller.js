myApp.controller('calendarController', [
  '$scope',
  'moment',
  'calendarService',
  'calendarConfig',
  function($scope, moment, calendarService, calendarConfig) {
    $scope.todayDate = moment().format('LL');
    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';
    //calendar variables
    this.calendarView = 'month';
    this.calendarDate = new Date();
    calendarService.getAllShifts().then(function(shifts) {
      this.events = shifts;
    }.bind(this));
  }
]);
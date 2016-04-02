(function() {
  'use strict';
  angular.module('myApp').controller('CalendarController', CalendarController);

  CalendarController.$inject = ['$scope', 'moment', 'calendarService', 'calendarConfig'];

  function CalendarController($scope, moment, calendarService, calendarConfig) {
    var vm = this;
    vm.todayDate = moment().format('LL');
    calendarConfig.templates.calendarMonthCell = 'customMonthCell.html';
    //calendar variables
    vm.calendarView = 'month';
    vm.calendarDate = new Date();
    calendarService.getAllShifts().then(function(shifts) {
      vm.events = shifts;
    });
  }
})();
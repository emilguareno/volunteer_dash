var myApp = angular.module('myApp', [
  'ui.router',
  'mwl.calendar',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'ngTagsInput'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  'calendarConfig',
  function($stateProvider, $urlRouterProvider, calendarConfig) {
    //
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('calendar', {
        url: "/",
        templateUrl: "calendar/index.html",
        controller: 'calendarController',
        controllerAs: 'calendar'
      }).state('shifts', {
        url: "/shifts",
        templateUrl: "shifts/index.html",
        controller: 'shiftsController'
      });
      
      calendarConfig.dateFormatter = 'moment';
      calendarConfig.allDateFormats.moment.date.time = 'hh:mm A';
  }
]);
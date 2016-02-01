var myApp = angular.module('myApp', ['ui.router', 'mwl.calendar']).config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
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
}]);

var myApp = angular.module('myApp', ['ui.router']).config([
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
      controller: 'calendarController'
    });
}]);
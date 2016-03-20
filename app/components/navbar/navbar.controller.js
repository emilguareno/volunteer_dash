myApp.controller('NavbarCtrl', function($scope, $location, $window) {
  'use strict';
  $scope.menu = [{
    'title': 'Home',
    'state': 'calendar'
  }, {
    'title': 'Shifts',
    'state': 'shifts'
  }];

  $scope.isCollapsed = true;
  // $scope.isAdmin = Auth.isAdmin;
  // $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
(function() {
  'use strict';
  angular.module('myApp').controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope', '$location', '$window'];

  function NavbarCtrl($scope, $location, $window) {
    var vm = this;
    vm.menu = [{
      'title': 'Home',
      'state': 'calendar'
    }, {
      'title': 'Shifts',
      'state': 'shifts'
    }];

    vm.isCollapsed = true;
    // vm.isAdmin = Auth.isAdmin;
    // vm.getCurrentUser = Auth.getCurrentUser;

    vm.isActive = function(route) {
      return route === $location.path();
    };
  }
})();
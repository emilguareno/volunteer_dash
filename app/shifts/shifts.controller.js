(function() {
  'use strict';
  angular.module('myApp').controller('ShiftsController', ShiftsController);

  ShiftsController.$inject = ['$scope', 'shiftService', 'userService', '$filter', '$q', 'Notification'];

  function ShiftsController($scope, shiftService, userService, $filter, $q, Notification) {
    var vm = this;
    vm.volunteers = [];
    vm.shift = {};
    vm.popup = {};
    userService.getAllUserNames().then(function(userInfo) {
      vm.userInfo = userInfo;
    });
    vm.filteredTagsAutoComplete = function(query) {
      var deferred = $q.defer();
      deferred.resolve($filter('filter')(vm.userInfo, {
        name: query
      }, false));
      return deferred.promise;
    };
    var coeff = 1000 * 60 * 5;
    var date = new Date(); //or use any other date
    vm.shift.startsAt = new Date(Math.round(date.getTime() / coeff) * coeff);
    $scope.$watch('vm.shift.startsAt', function(value) {
      vm.shift.endsAt = moment(value).toDate();
    }, true);
    vm.createShift = function(shift) {
      shift.volunteers = shift.volunteerNames.map(function(obj) {
        return obj.id;
      });
      shiftService.createShift(shift).then(function(response) {
        Notification.success('Shift has been added!');
      });
    };
  }
})();
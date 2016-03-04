myApp.controller('shiftsController', ['$scope', 'shiftService', 'userService', '$filter', '$q', function($scope, shiftService, userService, $filter, $q) {
  $scope.volunteers = [];
  $scope.shift = {};
  $scope.popup = {};
  userService.getAllUserNames().then(function(userInfo) {
    $scope.userInfo = userInfo;
  });
  $scope.filteredTagsAutoComplete = function(query) {
    var deferred = $q.defer();
    deferred.resolve($filter('filter')($scope.userInfo, {
      name: query
    }, false));
    return deferred.promise;
  };
  var coeff = 1000 * 60 * 5;
  var date = new Date(); //or use any other date
  $scope.shift.startDate = new Date(Math.round(date.getTime() / coeff) * coeff);
  $scope.shift.endDate = moment($scope.shift.startDate).add(3, 'hours').toDate();
  $scope.createShift = function(shift) {
    shift.volunteers = shift.volunteerNames.map(function(obj) {
      return obj.id;
    });
    shiftService.createShift(shift).then(function(response) {
      console.log(response);
    });
  };
}]);
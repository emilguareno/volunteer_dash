myApp.controller('shiftsController', ['$scope', 'shiftService', 'userService', '$filter', '$q', function($scope, shiftService, userService, $filter, $q) {
  $scope.volunteers = [];
  userService.getAllUserNames().then(function(userInfo) {
    $scope.userInfo = userInfo;
  });
  $scope.filteredTagsAutoComplete = function(query) {
    var deferred = $q.defer();
    deferred.resolve($filter('filter')($scope.userInfo, {name: query}, false));
    return deferred.promise;
  };
  $scope.createShift = function(shift) {
    shiftService.createShift(shift).then(function(response) {
      console.log(response);
    });
  };
}]);
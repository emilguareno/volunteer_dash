myApp.controller('shiftsController', ['$scope', 'shiftsService', function($scope, shiftsService) {
  shiftsService.getAllShifts().then(function(shifts){
    console.log(shifts);
  });
  $scope.createShift = function(shift){
    shiftsService.createShift(shift).then(function(response){
      console.log(response);
    });
  };
}]);
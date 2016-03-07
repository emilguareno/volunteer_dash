myApp.directive('shiftModal', ['$uibModal', function($uibModal) {
  return {
    templateUrl: function(element, attributes) {
      if (!attributes.template) {
        return 'directives/shift-modal/default.html';
      } else {
        return attributes.template;
      }
    },
    restrict: 'A',
    scope: {
      visible: '=',
      shift: '=',
      onShow: '&',
      onHide: '&',
      size: '@'
    },
    link: function postLink(scope, element, attrs) {
      element.on('click', function() {
        var modalInstance = $uibModal.open({
          animation: 'true',
          templateUrl: 'shiftModalContent.html',
          controller: 'modalController',
          size: scope.size,
          resolve: {
            shift: function() {
              return scope.shift;
            }
          }
        });
      });
    }
  };
}]);
myApp.controller('modalController', function($scope, $uibModalInstance, shift) {
  $scope.shift = shift;
  $scope.type = function() {
    if (shift.percent === 100) {
      return 'success';
    } else if (shift.percent >= 50) {
      return 'warning';
    } else {
      return 'danger';
    }
  }();
  $scope.ok = function() {
    console.log($scope.shift);
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
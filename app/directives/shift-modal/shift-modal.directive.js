(function() {
  'use strict';
  angular.module('myApp').directive('shiftModal', shiftModal);

  shiftModal.$inject = ['$uibModal'];

  function shiftModal($uibModal) {
    var directive = {
      templateUrl: 'directives/shift-modal/default.html',
      restrict: 'A',
      scope: {
        visible: '=',
        shift: '=',
        onShow: '&',
        onHide: '&',
        size: '@'
      },
      link: postLink
    };
    return directive;

    function postLink(scope, element, attrs) {
      element.on('click', function() {
        var modalInstance = $uibModal.open({
          animation: 'true',
          templateUrl: 'shiftModalContent.html',
          controller: 'ModalController',
          controllerAs: 'vm',
          size: scope.size,
          resolve: {
            shift: function() {
              return scope.shift;
            }
          }
        });
      });
    }
  }
})();
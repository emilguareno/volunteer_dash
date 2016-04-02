(function() {
  'use strict';
  angular.module('myApp').controller('ModalController', ModalController);

  // ModalController.$inject = ['$scope', '$uibModalInstance', 'shift'];

  function ModalController($scope, $uibModalInstance, shift) {
    var vm = this;
    vm.shift = shift;
    vm.type = function() {
      if (shift.percent === 100) {
        return 'success';
      } else if (shift.percent >= 50) {
        return 'warning';
      } else {
        return 'danger';
      }
    }();
    vm.ok = function() {
      console.log(vm.shift);
      $uibModalInstance.close();
    };

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
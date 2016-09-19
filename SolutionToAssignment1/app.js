(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.insertedText = "";
  $scope.systemResponse = "";
  $scope.checkIfTooMuch = function() {
    var count = $scope.insertedText.split(',').lenght;
    $scope.systemResponse = count;
  }
}
})();

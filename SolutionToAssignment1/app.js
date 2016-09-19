(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.insertedText = "";
  $scope.systemResponse = "";
  $scope.checkIfTooMuch = function() {
    var count = $scope.insertedText.split(',').length;
    if (count < 1)
      $scope.systemResponse = "Please enter data first";
    if (count < 4)
      $scope.systemResponse = "Enjoy!";
    else
      $scope.systemResponse = "Too much!";
  }
}
})();

(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.insertedText = "";
  $scope.systemResponse = "";
  $scope.checkIfTooMuch = function() {
    if (!$scope.insertedText)
      $scope.systemResponse = "Please enter data first";
    else {
      var count = $scope.insertedText.split(',').length;
      if (count < 4)
        $scope.systemResponse = "Enjoy!";
      else
        $scope.systemResponse = "Too much!";
    }
  }
}
})();

app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ];
    $scope.ajouterDepense = function() {
      $scope.depenses.push({valeur: parseInt($scope.newDepense)});
    };

    $scope.calTotal = function() {
      total = 0;
      for (i = 0; i < $scope.depenses.length; i++) {
        total += $scope.depenses[i].valeur;
      }
      $scope.total = total;
    };

    $scope.supDepense = function(x) {
      $scope.depenses.splice(x, 1);
    };

    $scope.$watch("depenses", $scope.calTotal, true);
}]);

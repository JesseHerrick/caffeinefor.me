var app = angular.module('caffeineForMe', []);

app.controller('CaffeineController', ['$scope', function($scope) {
  $scope.caffeine = {};

  // inputs for the algorithm
  // values:
  //   cup    = number of oz in the cup
  //   weight = number of lbs/kgs in weight
  //   unit   = unit the weight is in (lb or kg)
  $scope.caffeine.input = {
    // some friendly defaults
    'cup': 16,
    'weight': 175,
    'unit': 'lb'
  };

  // recognized constants
  //   2.2046 pounds in one kilogram
  // --------------------------------------
  //         3mg (caffeine) per kg (weight)
  //   18.4375mg (caffeine) per oz (coffee)
  // --------------------------------------
  // based on the above info:
  //    needed caffeine = 3 * weight (in kg)
  //   caffeine per cup = 18.4375 * oz (of coffee)
  //        cups needed = caffeine needed / caffeine per cup
  // ====================================================================
  // set up output object for printing
  $scope.caffeine.output = {};
  // on any change run this function
  $scope.caffeine.onChange = function() {
    $scope.caffeine.output.perCup = (18.4375 * $scope.caffeine.input.cup); // theNew = oz in cup
    $scope.caffeine.output.neededCaffeine = Math.round(3 * $scope.caffeine.input.weight);
    $scope.caffeine.output.cupsNeeded = Math.round($scope.caffeine.output.neededCaffeine / $scope.caffeine.output.perCup)

    if ($scope.caffeine.output.cupsNeeded == 0) { $scope.caffeine.output.cupsNeeded = 1; }
  };
  // weight conversions (converts lbs to kgs if necessary)
  $scope.caffeine.output.checkWeight = function() {
    var weight = $scope.caffeine.input.weight;
    if ($scope.caffeine.input.unit == 'lb') {
      $scope.caffeine.input.unit = 'kg';
      $scope.caffeine.input.weight = (weight / 2.2046);
    };
  };
  // update the output on input change
  // oz per cup
  $scope.$watch('caffeine.input.cup', function(theNew, theOld) {
    $scope.caffeine.output.perCup = (18.4375 * theNew); // theNew = oz in cup
    $scope.caffeine.onChange();
  });
  // weight (in kg)
  $scope.$watch('caffeine.input.weight', function(theNew, theOld) {
    $scope.caffeine.output.checkWeight(); // convert to kg if needed
    $scope.caffeine.onChange();
  });
  // unit check (converts weight if necessary)
  $scope.$watch('caffeine.input.unit', function(theNew, theOld) {
    $scope.caffeine.output.checkWeight(); // again, check and convert to kg if needed
    $scope.caffeine.onChange();
  });
}]);

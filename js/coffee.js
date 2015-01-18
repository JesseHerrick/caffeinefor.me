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
    'cup': 6,
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
    $scope.caffeine.output.checkWeight();
    $scope.caffeine.output.perCup = (18.4375 * $scope.caffeine.input.cup); // theNew = oz in cup
    $scope.caffeine.output.neededCaffeine = Math.round(3 * $scope.caffeine.input.weightInKg);
    $scope.caffeine.output.cupsNeeded = Math.round(($scope.caffeine.output.neededCaffeine / $scope.caffeine.output.perCup)*10)/10
    $scope.caffeine.output.coffeeOz = Math.round($scope.caffeine.output.cupsNeeded * $scope.caffeine.input.cup)
  };
  // adds weight in kg for the algorithm
  $scope.caffeine.output.checkWeight = function() {
    var weight = $scope.caffeine.input.weight;
    var unit = $scope.caffeine.input.unit;

    if (unit == 'lb') {
      $scope.caffeine.input.weightInKg = (weight / 2.2046);
    }
    else {
      $scope.caffeine.input.weightInKg = weight
    };
  };

  // lb => kg OR kg => lb ON unit change
  $scope.caffeine.input.changeUnit = function() {
    if ($scope.caffeine.input.unit == 'kg') {
      $scope.caffeine.input.weight = Math.round($scope.caffeine.input.weight / 2.2046);
    }
    else if ($scope.caffeine.input.unit == 'lb') {
      $scope.caffeine.input.weight = Math.round($scope.caffeine.input.weight * 2.2046);
    };
  }

  // run example input on first load
  $scope.caffeine.onChange();
}]);

// for random words about coffee
app.controller('CoffeeController', ['$scope', function($scope) {
  var coffeeWords = [
    "Beautiful",
    "Delicious",
    "Fulfilling",
    "Inspiring",
    "Bold"
  ];

  $scope.coffee = {};
  $scope.coffee.is = coffeeWords[Math.floor(Math.random() * coffeeWords.length)];
}]);

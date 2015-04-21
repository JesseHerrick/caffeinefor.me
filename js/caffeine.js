(function() {
  var Caffeine, Coffee, CoffeeCtrl, WordsCtrl, app, kgToLb, lbToKg, roundTo;

  roundTo = function(num, to) {
    var place;
    place = 1.0 * to;
    return Math.round(num * place) / place;
  };

  lbToKg = function(lb) {
    return lb * 0.454;
  };

  kgToLb = function(kg) {
    return kg / 0.454;
  };

  Caffeine = (function() {
    function Caffeine(options) {
      if (options == null) {
        options = {};
      }
      this.size = options.size || 6;
      this.weight = options.weight || 175;
      this.unit = options.unit || 'lb';
    }

    Caffeine.prototype.amount = function() {
      if (this.unit === 'lb') {
        this.weight = lbToKg(this.weight);
        this.unit = 'kg';
      }
      return roundTo(this.weight * 3, 100);
    };

    return Caffeine;

  })();

  Coffee = (function() {
    function Coffee(size, caffeine1) {
      this.size = size;
      this.caffeine = caffeine1;
    }

    Coffee.prototype.amount = function() {
      var amount;
      amount = this.caffeine / (this.size * 18.4375);
      return roundTo(amount, 10);
    };

    Coffee.prototype.oz = function() {
      return Math.round(this.caffeine / 18.4375);
    };

    return Coffee;

  })();

  app = angular.module('CaffeineForMe', []);

  app.controller('CoffeeCtrl', CoffeeCtrl = (function() {
    function CoffeeCtrl($scope) {
      $scope.size = 6;
      $scope.weight = 175;
      $scope.unit = 'lb';
      $scope.$watch('unit', function(newer, older) {
        if (older === 'lb' && newer === 'kg') {
          return $scope.weight = roundTo(lbToKg($scope.weight), 10);
        } else if (older === 'kg' && newer === 'lb') {
          return $scope.weight = roundTo(kgToLb($scope.weight), 10);
        }
      });
      $scope.$watchGroup(['size', 'weight', 'unit'], function() {
        var caffeine, coffee;
        caffeine = new Caffeine({
          size: $scope.size,
          weight: $scope.weight,
          unit: $scope.unit
        });
        coffee = new Coffee($scope.size, caffeine.amount());
        $scope.cups = coffee.oz();
        $scope.coffee = coffee.amount();
        return $scope.caffeine = caffeine.amount();
      });
    }

    return CoffeeCtrl;

  })());

  app.controller('WordsCtrl', WordsCtrl = (function() {
    function WordsCtrl() {}

    WordsCtrl.prototype.words = ["Beautiful", "Delicious", "Fulfilling", "Inspiring", "Bold"];

    WordsCtrl.prototype.random = function() {
      return this.words[Math.floor(Math.random() * this.words.length)];
    };

    return WordsCtrl;

  })());

}).call(this);

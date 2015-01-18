describe('CoffeeController', function(){
  beforeEach(module('caffeineForMe'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_
  }));

  describe('$scope.coffee', function(){
    var $scope, controller;
    beforeEach(function(){
      $scope = {};
      controller = $controller('CoffeeController', { $scope: $scope });
    });

    it('should be an object', function(){
      // may be an unneccessary test... idk
      expect(typeof($scope.coffee)).to.equal('object');
    });

    describe('.is', function(){
      it('returns a random word about coffee', function(){
        expect(typeof($scope.coffee.is)).to.equal('string');
      });
    });
  });
});

describe('CaffeineController', function(){
  beforeEach(module('caffeineForMe'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_
  }));

  describe('$scope.caffeine', function(){
    var $scope, controller;
    beforeEach(function(){
      $scope = {};
      controller = $controller('CaffeineController', { $scope: $scope });
    });

    describe('changeUnit', function(){
      it('should convert pounds to kg', function(){
        $scope.caffeine.input.unit = 'kg'; // kg is the changed unit
        $scope.caffeine.input.changeUnit();

        expect($scope.caffeine.input.unit).to.equal('kg');
        expect($scope.caffeine.input.weight).to.equal(79);
      });
    });

    describe('coffee amounts', function(){
      context('in pounds', function(){
        it('should return the right amounts for a 6oz cup', function(){
          expect($scope.caffeine.output.cupsNeeded).to.equal(2.2);
          expect($scope.caffeine.output.coffeeOz).to.equal(13);
          expect($scope.caffeine.output.neededCaffeine).to.equal(238);
        });

        it('should return the right amounts for an 8oz cup', function(){
          $scope.caffeine.input.size = 8;
          $scope.caffeine.onChange();

          expect($scope.caffeine.output.cupsNeeded).to.equal(1.6);
          expect($scope.caffeine.output.coffeeOz).to.equal(13);
          expect($scope.caffeine.output.neededCaffeine).to.equal(238);
        });

        it('should return the right amounts for a 12oz cup', function(){
          $scope.caffeine.input.size = 12;
          $scope.caffeine.onChange();

          expect($scope.caffeine.output.cupsNeeded).to.equal(1.1);
          expect($scope.caffeine.output.coffeeOz).to.equal(13);
          expect($scope.caffeine.output.neededCaffeine).to.equal(238);
        });

        it('should return the right amounts for a 16oz cup', function(){
          $scope.caffeine.input.size = 16;

          expect($scope.caffeine.output.cupsNeeded).to.equal(0.8);
          expect($scope.caffeine.output.coffeeOz).to.equal(13);
          expect($scope.caffeine.output.caffeineNeeded).to.equal(238);
        });
      });
    });
  });
});

/*
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
*/

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

    it('should do things', function(){
      expect(true).to.equal(true);
    });

    /*
    describe('#checkWeight', function(){
      it('should convert pounds to kg if necessary', function(){
        $scope.caffeine.input.cup = 16;
        $scope.caffeine.input.weight = 175;
        $scope.caffeine.input.unit = 'lb';

        $scope.caffeine.output.checkWeight();

        expect(input.weightInKg).to.equal(175 / 2.2046);
      });
    });
    */
  });
});

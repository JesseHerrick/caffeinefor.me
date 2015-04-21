# helper method for rounding
roundTo = (num, to) ->
  place = (1.0 * to)
  Math.round(num * place) / place

# .454kg per 1lb
lbToKg = (lb) -> lb * 0.454
kgToLb = (kg) -> kg / 0.454
  
# for caffeine values
class Caffeine
  constructor: (options = {}) ->
    @size   = options.size   || 6 # in oz
    @weight = options.weight || 175 # in unit below
    @unit   = options.unit   || 'lb' # lb/kg
  
  
  # caffeine needed in milligrams
  amount: ->
    if @unit == 'lb'
      @weight = lbToKg(@weight)
      @unit = 'kg'
    
    # rounds to nearest hundreth
    roundTo((@weight * 3), 100)

# for coffee amounts
class Coffee
  constructor: (@size, @caffeine) ->
    
  amount: ->
    # 18.4375mg of caffeine per oz
    amount = @caffeine / (@size * 18.4375)
    roundTo(amount, 10)
  
  oz: ->
    Math.round(@caffeine / 18.4375)
    
app = angular.module 'CaffeineForMe', []
app.controller 'CoffeeCtrl',
  class CoffeeCtrl
    constructor: ($scope) ->
      # defaults
      $scope.size = 6
      $scope.weight = 175
      $scope.unit = 'lb'
      
      # make automatic unit conversions
      $scope.$watch 'unit', (newer, older) ->
        if older == 'lb' && newer == 'kg'
          $scope.weight = roundTo(lbToKg($scope.weight), 10)
        else if older == 'kg' && newer == 'lb'
          $scope.weight = roundTo(kgToLb($scope.weight), 10)
      
      # make automatic calculations
      $scope.$watchGroup ['size', 'weight', 'unit'], ->
        caffeine = new Caffeine
          size: $scope.size
          weight: $scope.weight
          unit: $scope.unit
        
        coffee = new Coffee($scope.size, caffeine.amount())
        
        # set some values
        $scope.cups     = coffee.oz()
        $scope.coffee   = coffee.amount()
        $scope.caffeine = caffeine.amount()
          
        
      
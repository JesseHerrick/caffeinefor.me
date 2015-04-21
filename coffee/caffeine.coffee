app = angular.module 'CaffeineForMe', []

class Caffeine
  constructor: (options) ->
    @size   = options.size   || 6
    @weight = options.weight || 175
    @unit   = options.unit   || 'lb'
  
  # .454kg per 1lb
  lbToKg: (lb) -> lb * 0.454
  kgToLb: (kg) -> kg / 0.454
  
  # caffeine needed in milligrams
  amount: ->
    if @unit == 'lb'
      @weight = lbToKg(@weight)
      @unit = 'kg'
    
    @weight * 3

app.controller 'InputCtrl',
  class InputCtrl
    
    
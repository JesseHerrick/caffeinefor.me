// useful functions
var isLb = function(unit) {
  return unit === 'lb';
};

var lbToKg = function(lb) {
  return lb / 2.2;
};

// caffeine needed for user's bodyweight
var caffeineNeeded = function(weight) {
  return weight * 5; // 5 is the caffeine (mg) needed per pound
};

// coffee need (in floz) based on amount of caffeine
var coffeeNeeded = function(caffeine) {
  return caffeine / 20.375; // 20.375 is the amount of caffeine per oz of brewed coffee
}

// amount of cups to fulfil needed caffeine
var cupAmount = function(size, coffee) {
  return Math.ceil(coffee / size);
}

// output variables
var $cups = $('#cups'); // # of cups of coffee (given cup size)
var $caffeine = $('#caffeine'); // caffeine amount in mg

// finds
var calculateCoffee = function(size, weight, unit) {
  // convert weight and size to integers
  weight = parseInt(weight);
  size = parseInt(size);
  // check if weight is in lbs, if so, convert it to kg
  if (isLb(weight)) { weight = lbToKg(weight); };

  var coffee = {
    'caffeine': caffeineNeeded(weight),
    'coffee': coffeeNeeded(caffeineNeeded(weight)),
    'cups': cupAmount(size, coffeeNeeded(caffeineNeeded(weight)))
  };

  $cups.html(coffee.cups);
  $caffeine.html(coffee.caffeine);
  console.log('Done!');
};

// calculate once
calculateCoffee($('#size').val(), 175, 'lb');
$('body').change(function(){
  calculateCoffee($('#size').val(), $('#weight').val(), $('#unit').val());
});

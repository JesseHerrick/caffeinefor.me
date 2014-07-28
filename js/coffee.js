// useful functions
var isLb = function(unit) {
  return unit === 'lb';
};

var lbToKg = function(lb) {
  return lb / 2.2;
};

var kgToLb = function(kg) {
  return kg * 2.2;
}

// caffeine needed for user's bodyweight
var caffeineNeeded = function(weight) {
  return Math.ceil(weight * 5); // 5 is the caffeine (mg) needed per pound
};

// coffee need (in floz) based on amount of caffeine
var coffeeNeeded = function(caffeine) {
  return Math.ceil(caffeine / 20.375); // 20.375 is the amount of caffeine per oz of brewed coffee
}

// amount of cups to fulfil needed caffeine
var cupAmount = function(size, coffee) {
  return Math.ceil(coffee / size);
}

// output variables
var $cups = $('#cups'); // # of cups of coffee (given cup size)
var $caffeine = $('#caffeine'); // caffeine amount in mg

// replaces the html with the proper values
var calculateCoffee = function(size, weight, unit) {
  // convert weight and size to integers
  weight = parseInt(weight);
  size = parseInt(size);
  // check if weight is in lbs, if so, convert it to kg
  if (isLb(unit)) { weight = lbToKg(weight); };

  var coffee = {
    'caffeine': caffeineNeeded(weight),
    'coffee': coffeeNeeded(caffeineNeeded(weight)),
    'cups': cupAmount(size, coffeeNeeded(caffeineNeeded(weight)))
  };

  var cups_suffix = coffee.cups === 1 ? ' cups ' : ' cup ';
  $cups.html(coffee.cups || 0 + cups_suffix);
  $caffeine.html(coffee.caffeine || 0 + 'mg');
  console.log(coffee);
};

// calculate once
calculateCoffee($('#size').val(), 175, 'lb');

// on change and bind to change
$('body').change(function(){
  calculateCoffee($('#size').val(), $('#weight').val(), $('#unit').val());
});

$('#unit').change(function(){
  var unit = $('#unit').val();

  if (unit === 'kg') {
    $('#weight').val(Math.ceil(lbToKg(parseInt($('#weight').val()))));
  }
  else if (unit === 'lb') {
    $('#weight').val(Math.ceil(kgToLb(parseInt($('#weight').val()))));
  };
});

$('body').bind('input', function(){
  calculateCoffee($('#size').val(), $('#weight').val(), $('#unit').val());
});

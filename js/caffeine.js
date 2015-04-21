(function() {
  var Caffeine, InputCtrl, app;

  app = angular.module('CaffeineForMe', []);

  Caffeine = (function() {
    function Caffeine(options) {
      this.size = options.size || 6;
      this.weight = options.weight || 175;
      this.unit = options.unit || 'lb';
    }

    Caffeine.prototype.lbToKg = function(lb) {
      return lb * 0.454;
    };

    Caffeine.prototype.kgToLb = function(kg) {
      return kg / 0.454;
    };

    Caffeine.prototype.amount = function() {
      if (this.unit === 'lb') {
        this.weight = lbToKg(this.weight);
        this.unit = 'kg';
      }
      return this.weight * 3;
    };

    return Caffeine;

  })();

  app.controller('InputCtrl', InputCtrl = (function() {
    function InputCtrl() {}

    return InputCtrl;

  })());

}).call(this);

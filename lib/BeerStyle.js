'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeerStyle = function () {
  function BeerStyle(name, IBU, SRM, ABV, beerOrganolepticDescription) {
    _classCallCheck(this, BeerStyle);

    console.log('Constructing BeerStyle instance...');
    this.name = name;
    this.IBU = IBU;
    this.SRM = SRM;
    this.ABV = ABV;
    this.beerOrganolepticDescription = beerOrganolepticDescription;
  }

  _createClass(BeerStyle, [{
    key: 'get',
    value: function get() {
      return this;
    }
  }]);

  return BeerStyle;
}();

exports.default = BeerStyle;
;
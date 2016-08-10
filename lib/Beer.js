'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BeerStyle2 = require('./BeerStyle');

var _BeerStyle3 = _interopRequireDefault(_BeerStyle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Beer = function (_BeerStyle) {
  _inherits(Beer, _BeerStyle);

  function Beer(name, IBU, SRM, ABV, beerOrganolepticDescription, stock, breweryName, beerID) {
    _classCallCheck(this, Beer);

    console.log('Constructing Beer instance...');

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Beer).call(this, name, IBU, SRM, ABV, beerOrganolepticDescription));

    _this.beerID = beerID;
    _this.tapID = beerID;
    _this.stock = stock;
    _this.breweryName = breweryName;
    _this.beerFantasyName = beerID;

    return _this;
  }

  _createClass(Beer, [{
    key: 'get',
    value: function get() {
      return this;
    }
  }]);

  return Beer;
}(_BeerStyle3.default);

exports.default = Beer;
;
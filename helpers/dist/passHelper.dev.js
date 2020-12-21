"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bcrypt = require('bcryptjs');

var PassHelper =
/*#__PURE__*/
function () {
  function PassHelper() {
    _classCallCheck(this, PassHelper);
  }

  _createClass(PassHelper, null, [{
    key: "generatePassword",
    value: function generatePassword(plain) {
      var salt = bcrypt.genSaltSync(+process.env.SALT);
      return bcrypt.hashSync(plain, salt);
    }
  }, {
    key: "comparePassword",
    value: function comparePassword(plain, hash) {
      return bcrypt.compareSync(plain, hash);
    }
  }]);

  return PassHelper;
}();

module.exports = PassHelper;
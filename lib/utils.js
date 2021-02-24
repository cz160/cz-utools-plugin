"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensure = ensure;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = require("fs-extra");

function ensureDir(_x) {
  return _ensureDir.apply(this, arguments);
}

function _ensureDir() {
  _ensureDir = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dir) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _fs.default.promises.access(dir);

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            (0, _fsExtra.ensureDirSync)(dir);

          case 8:
            return _context.abrupt("return", true);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _ensureDir.apply(this, arguments);
}

function ensureFileDir(_x2) {
  return _ensureFileDir.apply(this, arguments);
}

function _ensureFileDir() {
  _ensureFileDir = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(filepath) {
    var _path$parse, dir;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _path$parse = _path.default.parse(filepath), dir = _path$parse.dir;
            return _context2.abrupt("return", ensureDir(dir));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _ensureFileDir.apply(this, arguments);
}

function ensure(filepath) {
  var ext = filepath.ext;

  if (ext === undefined) {
    return ensureDir(filepath);
  }

  return ensureFileDir(filepath);
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _vinylFs = _interopRequireDefault(require("vinyl-fs"));

var _index = require("./index");

var _utils = require("./utils");

// 输出目录名
var OUTPUT_NAME = "dist"; // 根目录名

var ROOT_DIR = _path.default.resolve(__dirname); // 输入目录地址


var OUTPUT_DIR = _path.default.resolve(ROOT_DIR, "../", OUTPUT_NAME); // public文件夹地址


var PUBLIC_DIR = _path.default.resolve(ROOT_DIR, "../public"); // 生成配置文件


function generatePluginJSON() {
  return _generatePluginJSON.apply(this, arguments);
}

function _generatePluginJSON() {
  _generatePluginJSON = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.ensure)(OUTPUT_DIR);

          case 2:
            return _context.abrupt("return", _fs.default.promises.writeFile(_path.default.resolve(OUTPUT_DIR, "plugin.json"), JSON.stringify(_index.PLUGIN_JSON, null, 4)));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generatePluginJSON.apply(this, arguments);
}

generatePluginJSON(); // 复制文件

function copy(files) {
  var patterns = files;

  _vinylFs.default.src(patterns).pipe(_vinylFs.default.dest(OUTPUT_DIR));
}

copy(_index.NEED_COPY_FILE.map(function (file) {
  return _path.default.resolve(ROOT_DIR, file);
}));
copy(["**/*"].map(function (file) {
  return _path.default.resolve(PUBLIC_DIR, file);
}));
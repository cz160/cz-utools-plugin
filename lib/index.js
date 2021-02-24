"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NEED_COPY_FILE = exports.PLUGIN_JSON = void 0;

var _constants = require("./constants");

// 配置文件
var PLUGIN_JSON = {
  pluginName: "site-navigation",
  description: "常见网站导航合集",
  version: "0.0.1",
  preload: "./preload.js",
  author: "竹合",
  homepage: "http://www.czhuangjia.top/",
  logo: "logo.jpeg",
  features: []
}; // 增加快捷命令

exports.PLUGIN_JSON = PLUGIN_JSON;

function addFeatures(features) {
  PLUGIN_JSON.features = PLUGIN_JSON.features.concat(features);
}

var features = _constants.sites.map(function (site) {
  var title = site.title,
      desc = site.desc;
  return {
    code: title,
    explain: desc,
    cmds: [title]
  };
});

addFeatures(features);
var NEED_COPY_FILE = ["constants.js"];
exports.NEED_COPY_FILE = NEED_COPY_FILE;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _children = require("./children");

Object.keys(_children).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _children[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _children[key];
    }
  });
});

var _createIosMenu = require("./create-ios-menu");

Object.keys(_createIosMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createIosMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createIosMenu[key];
    }
  });
});

var _webPrimitives = require("./web-primitives");

Object.keys(_webPrimitives).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _webPrimitives[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _webPrimitives[key];
    }
  });
});

var _displayNames = require("./display-names");

Object.keys(_displayNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _displayNames[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _displayNames[key];
    }
  });
});

var _createAndroidMenu = require("./create-android-menu");

Object.keys(_createAndroidMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createAndroidMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createAndroidMenu[key];
    }
  });
});
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _indexController = require("../controllers/indexController");

var router = (0, _express.Router)();
router.route('/').get(_indexController.index);
var _default = router;
exports["default"] = _default;
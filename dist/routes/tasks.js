"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasksController = require("../controllers/tasksController");

var router = (0, _express.Router)();
router.route('/').get(_tasksController.index).post(_tasksController.create);
router.route('/:id').get(_tasksController.getOne)["delete"](_tasksController.remove).put(_tasksController.update);
var _default = router;
exports["default"] = _default;
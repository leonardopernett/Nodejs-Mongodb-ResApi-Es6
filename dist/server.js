"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //seting 

app.set('port', process.env.PORT || 3000);
app.set('views ', _path["default"].join(__dirname, 'views')); //middleware

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.use(_routes["default"]);
app.use('/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.remove = remove;
exports.getOne = getOne;
exports.update = update;

var _database = require("../database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function index(_x, _x2, _x3) {
  return _index.apply(this, arguments);
}

function _index() {
  _index = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connection)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.collection('tasks').find({}).toArray();

          case 5:
            result = _context.sent;
            res.json(result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _index.apply(this, arguments);
}

function create(_x4, _x5, _x6) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var db, task, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connection)();

          case 2:
            db = _context2.sent;
            task = {
              title: req.body.title,
              description: req.body.description
            };
            _context2.next = 6;
            return db.collection('tasks').insert(task);

          case 6:
            result = _context2.sent;
            res.json(result.ops[0]);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _create.apply(this, arguments);
}

function remove(_x7, _x8, _x9) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var db;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connection)();

          case 2:
            db = _context3.sent;
            _context3.next = 5;
            return db.collection('tasks').deleteOne({
              _id: (0, _mongodb.ObjectID)(req.params.id)
            });

          case 5:
            res.status(200).json({
              message: 'taks deleted successfully'
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _remove.apply(this, arguments);
}

function getOne(_x10, _x11, _x12) {
  return _getOne.apply(this, arguments);
}

function _getOne() {
  _getOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connection)();

          case 2:
            db = _context4.sent;
            _context4.next = 5;
            return db.collection('tasks').findOne({
              _id: (0, _mongodb.ObjectID)(req.params.id)
            });

          case 5:
            result = _context4.sent;
            res.json(result);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOne.apply(this, arguments);
}

function update(_x13, _x14, _x15) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    var db, updateTask, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connection)();

          case 2:
            db = _context5.sent;
            updateTask = {
              title: req.body.title,
              description: req.body.description
            };
            _context5.next = 6;
            return db.collection('tasks').updateOne({
              _id: (0, _mongodb.ObjectID)(req.params.id)
            }, {
              $set: updateTask
            });

          case 6:
            result = _context5.sent;
            res.json(result);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _update.apply(this, arguments);
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routeConfig = __webpack_require__(1);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _swRegister = __webpack_require__(2);

var _swRegister2 = _interopRequireDefault(_swRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = angular.module('gapp', ['ngRoute', 'ngMaterial']);

app.controller('mainCtrl', function ($scope) {
  $scope.message = "Routes";
});

app.config(_routeConfig2.default);
(0, _swRegister2.default)();

exports.default = app;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routeConfig;
function routeConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/home.html',
    controller: 'mainCtrl'
  }).when('/next', {
    templateUrl: 'pages/next.html',
    controller: 'mainCtrl'
  });
}

routeConfig.$inject = ["$routeProvider"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sw;
function sw() {

  var token = 'BDo6btp0LW7-5yYv3Fw917Bqw7nLmcs2sKMx0BUWAd7YUXH7U2oFAnllNDvZ5URV4sWZT2T8qFTYrmGxQRuJSeQ';

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js').then(function (registration) {
        // Registration was successful
        function initUI() {
          registration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
              console.log('User is subscribed to notifications');
            } else {
              console.log('User is not subscribed :(');
              //subscribeUser(registration);
            }
          });
        }
        console.log('ServiceWorker registration successful', registration);
        initUI();
      }).catch(function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

/***/ })
/******/ ]);
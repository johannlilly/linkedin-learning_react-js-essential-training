/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _ReactDOM = ReactDOM,
	    render = _ReactDOM.render;

	// we can use modular bundles like webpack to handle some of the transpiling work for us

	// npm install webpack@1.13.3 --save-dev
	// npm install babel-loader@6.2.5 --save-dev
	// npm install webpack-dev-server@1.16.2 --save-dev
	//
	// sudo npm install -g webpack@1.13.3
	// OR
	// ./node_modules/.bin/webpack
	// 
	// webpack

	render(React.createElement(
		'h1',
		{ id: 'title',
			className: 'header',
			style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
		'Hello World'
	), document.getElementById('react-container'));

/***/ }
/******/ ]);
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/kwakgyeongjin/Desktop/code/react-node-sns/front/pages/_app.js\";\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(NodeBird)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2lkdGhSZWR1eFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUNsQyxzQkFDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUdELENBSkQ7O0FBTUFELFFBQVEsQ0FBQ0UsU0FBVCxHQUFxQjtBQUNuQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURkLENBQXJCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFjLENBQUNSLFFBQUQsQ0FBaEMsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IHdpZHRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XG5cbmNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuKFxuICAgIDxDb21wb25lbnQgLz5cbiAgKVxufVxuXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpZHRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // const initialState = {\n//   user: {},\n//   post: {},\n// };\n// (이전상태, 액션) => 다음상태\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}); // {\n//     switch (action.type) {\n//       case HYDRATE:\n//         console.log('HYDRATE', action);\n//         return { ...state, ...action.payload };\n//       default:\n//         return state;\n//     }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUM3QixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxXQUFLQywwREFBTDtBQUNFQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLCtDQUFZRCxLQUFaLEdBQXNCQyxNQUFNLENBQUNLLE9BQTdCOztBQUNGO0FBQ0UsZUFBT04sS0FBUDtBQUxKO0FBT0QsR0FUaUM7QUFVbENPLHFEQVZrQztBQVdsQ0MscURBQUlBO0FBWDhCLENBQUQsQ0FBbkMsQyxDQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZVgsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XG5cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbi8vICAgdXNlcjoge30sXG4vLyAgIHBvc3Q6IHt9LFxuLy8gfTtcblxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyLCBcbiAgcG9zdFxufSk7XG5cbi8vIHtcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICBjYXNlIEhZRFJBVEU6XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcbi8vICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'gyeongjin'\n    },\n    content: '첫번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_85118A2DC37D9ED8A6BE5CC45A853BB2.jpeg'\n    }, {\n      src: 'https://cdn.pixabay.com/photo/2018/01/10/23/53/rabbit-3075088_960_720.png'\n    }, {\n      src: 'https://funshop.akamaized.net/products/0000045272/vs_image800.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'gyjin'\n      },\n      content: '저도 단식중입니다..'\n    }, {\n      User: {\n        nickname: 'slimmer'\n      },\n      content: '헐.. 할만하신가요?'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미 데이터입니다..',\n  User: {\n    id: 1,\n    nickname: 'gyeongjin'\n  },\n  Images: [],\n  Contents: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsIkNvbnRlbnRzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUNUO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZSO0FBTUVDLFdBQU8sRUFBRSxzQkFOWDtBQU9FQyxVQUFNLEVBQUUsQ0FDTjtBQUNFQyxTQUFHLEVBQ0Q7QUFGSixLQURNLEVBS047QUFDRUEsU0FBRyxFQUNEO0FBRkosS0FMTSxFQVNOO0FBQ0VBLFNBQUcsRUFDRDtBQUZKLEtBVE0sQ0FQVjtBQXFCRUMsWUFBUSxFQUFFLENBQ1I7QUFDRUwsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBRFEsRUFPUjtBQUNFRixVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BRFI7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FQUTtBQXJCWixHQURTLENBRGU7QUF1QzFCSSxZQUFVLEVBQUUsRUF2Q2M7QUF3QzFCQyxXQUFTLEVBQUU7QUF4Q2UsQ0FBckI7QUEyQ1AsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ08sTUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVGO0FBRGUsQ0FBaEI7QUFJUCxNQUFNRyxTQUFTLEdBQUc7QUFDaEJaLElBQUUsRUFBRSxDQURZO0FBRWhCRyxTQUFPLEVBQUUsYUFGTztBQUdoQkYsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJFLFFBQU0sRUFBRSxFQVBRO0FBUWhCUyxVQUFRLEVBQUU7QUFSTSxDQUFsQjs7QUFXQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHakIsWUFBVCxFQUF1QmtCLE1BQXZCLEtBQWtDO0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNFLFNBQUtGLFFBQUw7QUFDRSw2Q0FDS00sS0FETDtBQUVFaEIsaUJBQVMsRUFBRSxDQUFDYSxTQUFELEVBQVksR0FBR0csS0FBSyxDQUFDaEIsU0FBckIsQ0FGYjtBQUdFUyxpQkFBUyxFQUFFO0FBSGI7O0FBS0Y7QUFDRSxhQUFPTyxLQUFQO0FBUko7QUFVRCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiAnZ3llb25namluJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4uY3Jvd2RwaWMubmV0L2xpc3QtdGh1bWIvdGh1bWJfbF84NTExOEEyREMzN0Q5RUQ4QTZCRTVDQzQ1QTg1M0JCMi5qcGVnJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzAxLzEwLzIzLzUzL3JhYmJpdC0zMDc1MDg4Xzk2MF83MjAucG5nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICdodHRwczovL2Z1bnNob3AuYWthbWFpemVkLm5ldC9wcm9kdWN0cy8wMDAwMDQ1MjcyL3ZzX2ltYWdlODAwLmpwZycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnZ3lqaW4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogJ+yggOuPhCDri6jsi53spJHsnoXri4jri6QuLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogJ3NsaW1tZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogJ+2XkC4uIO2VoOunjO2VmOyLoOqwgOyalD8nLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgcG9zdEFkZGVkOiBmYWxzZSxcbn1cblxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgdHlwZTogQUREX1BPU1QsXG59XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6ICfrjZTrr7gg642w7J207YSw7J6F64uI64ukLi4nLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6ICdneWVvbmdqaW4nLFxuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb250ZW50czogW10sXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // action creator\n\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    default:\n      return state;\n\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFlBQVUsRUFBRSxLQURjO0FBRTFCQyxJQUFFLEVBQUUsSUFGc0I7QUFHMUJDLFlBQVUsRUFBRSxFQUhjO0FBSTFCQyxXQUFTLEVBQUU7QUFKZSxDQUFyQixDLENBT1A7O0FBQ08sTUFBTUMsV0FBVyxHQUFJQyxJQUFELElBQVU7QUFDbkMsU0FBTztBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMRDtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUUsWUFBWSxHQUFHLE1BQU07QUFDaEMsU0FBTztBQUNMRCxRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0QsQ0FKTTs7QUFNUCxNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHVixZQUFULEVBQXVCVyxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRTtBQUNFLGFBQU9HLEtBQVA7O0FBRUYsU0FBSyxRQUFMO0FBQ0UsNkNBQ0tBLEtBREw7QUFFRVQsa0JBQVUsRUFBRSxJQUZkO0FBR0VDLFVBQUUsRUFBRVMsTUFBTSxDQUFDTDtBQUhiOztBQU1GLFNBQUssU0FBTDtBQUNFLDZDQUNLSSxLQURMO0FBRUVULGtCQUFVLEVBQUUsS0FGZDtBQUdFQyxVQUFFLEVBQUU7QUFITjtBQVpKO0FBa0JELENBbkJEOztBQXFCZU8sc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIG1lOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9naW5EYXRhOiB7fSxcbn07XG5cbi8vIGFjdGlvbiBjcmVhdG9yXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dfSU4nLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dfT1VUJyxcbiAgfTtcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgIGNhc2UgJ0xPR19JTic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcblxuICAgIGNhc2UgJ0xPR19PVVQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICBtZTogbnVsbCxcbiAgICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n\n //take, takeEvery\n//effect 앞에는 yield를 붙혀줌\n\nfunction logInAPI(data) {\n  // 3 실제로 서버에 요청을 보냄\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', data);\n}\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/logout');\n}\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);\n} //.....................................................................................\n\n\nfunction* logIn(action) {\n  try {\n    // 2 action이 실행되면 불러져오는 generator 함수\n    // yield는 await와 비슷한 역할을 하고 fork는 await를 쓰지 않은 효과\n    // 아래 예제에서 fork를 사용하게 되면 result.data에서 result가 없는 꼴이 되기 때문에 안됨\n    // const result = yield call(logInAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000); //logInAPI(action.data)\n    //call(logInAPI, arction.data)\n    //첫번쨰 자리가 함수고 그다음부터는 매개변수\n\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_IN_SUCCESS' // data: result.data,\n\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_IN_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* logOut() {\n  try {\n    // const result = yield call(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_OUT_SUCCESS' // data: result.data\n\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_OUT_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* addPost(action) {\n  try {\n    // const result = yield call(addPostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'ADD_POST_SUCCESS' // data: result.data\n\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'ADD_POST_FAILURE',\n      data: err.response.data\n    });\n  }\n} //.....................................................................................\n// 0 eventListener 를 만들어서 all을 사용해서 등록해줌\n\n\nfunction* watchLogin() {\n  // 1 LOG_IN 함수가 실행되면 logIn함수 호출\n  // take 함수를 실행할때까지 기다림 - 일회용 때문에 while(true) 사용 = takeEvery = takeLatest 중복 클릭인식시 마지막 것만 인식 (동시에 로딩중인것만 취소처리 front에서만 그렇게 처리 readme 참고) 해서 서버에서 연달아 오는 요청 검증필요\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('LOG_IN_REQUEST', logIn);\n}\n\n;\n\nfunction* watchLogout() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('LOG_OUT_REQUEST', logOut);\n}\n\n;\n\nfunction* watchAddPost() {\n  //throttle은 2초에 딱 한번만 함수를 실행할수 있게 하는것\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('ADD_POST_REQUEST', addPost, 2000);\n}\n\n;\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImxvZ091dEFQSSIsImFkZFBvc3RBUEkiLCJsb2dJbiIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsImUiLCJlcnIiLCJyZXNwb25zZSIsImxvZ091dCIsImFkZFBvc3QiLCJ3YXRjaExvZ2luIiwidGFrZUxhdGVzdCIsIndhdGNoTG9nb3V0Iiwid2F0Y2hBZGRQb3N0Iiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEI7QUFDQSxTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkYsSUFBekIsQ0FBUDtBQUNEOztBQUVELFNBQVNHLFNBQVQsR0FBcUI7QUFDbkIsU0FBT0YsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVNFLFVBQVQsQ0FBb0JKLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0QsQyxDQUNEOzs7QUFFQSxVQUFVSyxLQUFWLENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QixNQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBRUE7QUFDQSxVQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWCxDQU5FLENBUUY7QUFDQTtBQUNBOztBQUVBLFVBQU1DLDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFLGdCQURFLENBRVI7O0FBRlEsS0FBRCxDQUFUO0FBSUQsR0FoQkQsQ0FnQkUsT0FBTUMsQ0FBTixFQUFTO0FBQ1QsVUFBTUYsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUsZ0JBREU7QUFFUlQsVUFBSSxFQUFFVyxHQUFHLENBQUNDLFFBQUosQ0FBYVo7QUFGWCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVhLE1BQVYsR0FBbUI7QUFDakIsTUFBSTtBQUNGO0FBQ0EsVUFBTU4sZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFFQSxVQUFNQyw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxpQkFERSxDQUVSOztBQUZRLEtBQUQsQ0FBVDtBQUlELEdBUkQsQ0FRRSxPQUFNQyxDQUFOLEVBQVM7QUFDVCxVQUFNRiw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxpQkFERTtBQUVSVCxVQUFJLEVBQUVXLEdBQUcsQ0FBQ0MsUUFBSixDQUFhWjtBQUZYLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVWMsT0FBVixDQUFrQlIsTUFBbEIsRUFBMEI7QUFDeEIsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFFQSxVQUFNQyw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxrQkFERSxDQUVSOztBQUZRLEtBQUQsQ0FBVDtBQUlELEdBUkQsQ0FRQyxPQUFNQyxDQUFOLEVBQVM7QUFDUixVQUFNRiw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxrQkFERTtBQUVSVCxVQUFJLEVBQUVXLEdBQUcsQ0FBQ0MsUUFBSixDQUFhWjtBQUZYLEtBQUQsQ0FBVDtBQUlEO0FBRUYsQyxDQUVEO0FBRUE7OztBQUNBLFVBQVVlLFVBQVYsR0FBdUI7QUFDckI7QUFDQTtBQUNBLFFBQU1DLHFFQUFVLENBQUMsZ0JBQUQsRUFBbUJYLEtBQW5CLENBQWhCO0FBQ0Q7O0FBQUE7O0FBRUQsVUFBVVksV0FBVixHQUF3QjtBQUN0QixRQUFNRCxxRUFBVSxDQUFDLGlCQUFELEVBQW9CSCxNQUFwQixDQUFoQjtBQUNEOztBQUFBOztBQUVELFVBQVVLLFlBQVYsR0FBeUI7QUFDdkI7QUFDQSxRQUFNRixxRUFBVSxDQUFDLGtCQUFELEVBQXFCRixPQUFyQixFQUE4QixJQUE5QixDQUFoQjtBQUNEOztBQUFBO0FBRWMsVUFBVUssUUFBVixHQUFvQjtBQUNqQyxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNOLFVBQUQsQ0FESSxFQUVSTSwrREFBSSxDQUFDSixXQUFELENBRkksRUFHUkksK0RBQUksQ0FBQ0gsWUFBRCxDQUhJLENBQUQsQ0FBVDtBQUtEIiwiZmlsZSI6Ii4vc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbi8vdGFrZSwgdGFrZUV2ZXJ5XG5cbi8vZWZmZWN0IOyVnuyXkOuKlCB5aWVsZOulvCDrtpntmIDspIxcblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICAvLyAzIOyLpOygnOuhnCDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuDhFxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpXG59XG5cbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jylcbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKVxufVxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICAvLyAyIGFjdGlvbuydtCDsi6TtlonrkJjrqbQg67aI65+s7KC47Jik64qUIGdlbmVyYXRvciDtlajsiJhcbiAgICAvLyB5aWVsZOuKlCBhd2FpdOyZgCDruYTsirftlZwg7Jet7ZWg7J2EIO2VmOqzoCBmb3Jr64qUIGF3YWl066W8IOyTsOyngCDslYrsnYAg7Zqo6rO8XG4gICAgLy8g7JWE656YIOyYiOygnOyXkOyEnCBmb3Jr66W8IOyCrOyaqe2VmOqyjCDrkJjrqbQgcmVzdWx0LmRhdGHsl5DshJwgcmVzdWx06rCAIOyXhuuKlCDqvLTsnbQg65CY6riwIOuVjOusuOyXkCDslYjrkKhcblxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcblxuICAgIC8vbG9nSW5BUEkoYWN0aW9uLmRhdGEpXG4gICAgLy9jYWxsKGxvZ0luQVBJLCBhcmN0aW9uLmRhdGEpXG4gICAgLy/ssqvrsojsqLAg7J6Q66as6rCAIO2VqOyImOqzoCDqt7jri6TsnYzrtoDthLDripQg66ek6rCc67OA7IiYXG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pXG4gIH0gY2F0Y2goZSkge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiogbG9nT3V0KCkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiAnTE9HX09VVF9TVUNDRVNTJyxcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgfSlcbiAgfSBjYXRjaChlKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6ICdMT0dfT1VUX0ZBSUxVUkUnLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6ICdBRERfUE9TVF9TVUNDRVNTJyxcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgfSlcbiAgfWNhdGNoKGUpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0FERF9QT1NUX0ZBSUxVUkUnLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG5cbn1cblxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbi8vIDAgZXZlbnRMaXN0ZW5lciDrpbwg66eM65Ok7Ja07IScIGFsbOydhCDsgqzsmqntlbTshJwg65Ox66Gd7ZW07KSMXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgLy8gMSBMT0dfSU4g7ZWo7IiY6rCAIOyLpO2WieuQmOuptCBsb2dJbu2VqOyImCDtmLjstpxcbiAgLy8gdGFrZSDtlajsiJjrpbwg7Iuk7ZaJ7ZWg65WM6rmM7KeAIOq4sOuLpOumvCAtIOydvO2ajOyaqSDrlYzrrLjsl5Agd2hpbGUodHJ1ZSkg7IKs7JqpID0gdGFrZUV2ZXJ5ID0gdGFrZUxhdGVzdCDspJHrs7Ug7YG066at7J247Iud7IucIOuniOyngOuniSDqsoPrp4wg7J247IudICjrj5nsi5zsl5Ag66Gc65Sp7KSR7J246rKD66eMIOy3qOyGjOyymOumrCBmcm9udOyXkOyEnOunjCDqt7jroIfqsowg7LKY66asIHJlYWRtZSDssLjqs6ApIO2VtOyEnCDshJzrsoTsl5DshJwg7Jew64us7JWEIOyYpOuKlCDsmpTssq0g6rKA7Kad7ZWE7JqUXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19JTl9SRVFVRVNUJywgbG9nSW4pO1xufTtcblxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dPdXQpO1xufTtcblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgLy90aHJvdHRsZeydgCAy7LSI7JeQIOuUsSDtlZzrsojrp4wg7ZWo7IiY66W8IOyLpO2Wie2VoOyImCDsnojqsowg7ZWY64qU6rKDXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FERF9QT1NUX1JFUVVFU1QnLCBhZGRQb3N0LCAyMDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hMb2dpbiksXG4gICAgZm9yayh3YXRjaExvZ291dCksXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpXG4gIF0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer = false ? undefined // 배포용\n  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares)); // 개발용\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtBQUNBLFFBQU1HLFFBQVEsR0FDWixRQUNJQyxTQURKLENBQzZDO0FBRDdDLElBRUlDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FIekIsQ0FIMkIsQ0FNaUM7O0FBQzVELFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNHLFFBQU4sR0FBaUJWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQkMsOENBQW5CLENBQWpCO0FBQ0EsU0FBT0wsS0FBUDtBQUNELENBVkQ7O0FBWUEsTUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDZixjQUFELEVBQWlCO0FBQzVDZ0IsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy8g67Cw7Y+s7JqpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7IC8vIOqwnOuwnOyaqVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });
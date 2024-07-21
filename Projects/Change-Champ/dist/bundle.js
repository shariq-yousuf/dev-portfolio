/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-input.js */ \"./src/user-input.js\");\n\r\n\r\nconst calculateBtn = document.querySelector(\"#calculate-btn\");\r\nconst introSection = document.querySelector(\"#intro-section\");\r\nconst closeBtn = document.querySelector(\".close-btn\");\r\nconst howToUseBtn = document.querySelector(\".how-to-use\");\r\nlet changeDue;\r\n\r\nconst checkPurchase = (val) => {\r\n  if (_user_input_js__WEBPACK_IMPORTED_MODULE_0__.totalAmount > 0) {\r\n    if (val < _user_input_js__WEBPACK_IMPORTED_MODULE_0__.totalAmount) {\r\n      alert(\"Customer does not have enough money to purchase the item\");\r\n    } else if (val === _user_input_js__WEBPACK_IMPORTED_MODULE_0__.totalAmount) {\r\n      _user_input_js__WEBPACK_IMPORTED_MODULE_0__.changeDueEl.textContent = \"No change due - customer paid with exact cash\";\r\n      (0,_user_input_js__WEBPACK_IMPORTED_MODULE_0__.removePrices)();\r\n    } else {\r\n      (0,_user_input_js__WEBPACK_IMPORTED_MODULE_0__.setCashDue)(val - _user_input_js__WEBPACK_IMPORTED_MODULE_0__.totalAmount);\r\n      checkDrawer();\r\n    }\r\n  }\r\n};\r\n\r\nconst checkDrawer = () => {\r\n  const cidType = _user_input_js__WEBPACK_IMPORTED_MODULE_0__.cidArr;\r\n  const drawerCash = cidType.reduce((acc, item) => item[1] + acc, 0);\r\n\r\n  if (_user_input_js__WEBPACK_IMPORTED_MODULE_0__.cashDue > drawerCash) {\r\n    showStatus(\"Status: INSUFFICIENT_FUNDS\");\r\n  } else {\r\n    returnChange(_user_input_js__WEBPACK_IMPORTED_MODULE_0__.cashDue, cidType);\r\n  }\r\n\r\n  _user_input_js__WEBPACK_IMPORTED_MODULE_0__.totalDueEl.textContent = `${_user_input_js__WEBPACK_IMPORTED_MODULE_0__.isPKR ? \"Rs. \" : \"$ \"}${_user_input_js__WEBPACK_IMPORTED_MODULE_0__.cashDue}`;\r\n};\r\n\r\nconst showStatus = (status) => {\r\n  _user_input_js__WEBPACK_IMPORTED_MODULE_0__.changeDueEl.textContent = status;\r\n};\r\n\r\nconst returnChange = (cashDue, cid) => {\r\n  changeDue = [];\r\n  let remainingDue = cashDue;\r\n\r\n  cid.toReversed().forEach((item, index) => {\r\n    const name = item[0];\r\n    let cash = item[1];\r\n    const currency = _user_input_js__WEBPACK_IMPORTED_MODULE_0__.isPKR ? _user_input_js__WEBPACK_IMPORTED_MODULE_0__.currencyValues[0][name] : _user_input_js__WEBPACK_IMPORTED_MODULE_0__.currencyValues[1][name];\r\n\r\n    while (parseFloat(remainingDue.toFixed(2)) >= currency && cash > 0) {\r\n      changeDue[index]\r\n        ? (changeDue[index] = [name, changeDue[index][1] + currency])\r\n        : (changeDue[index] = [name, currency]);\r\n      remainingDue -= currency;\r\n      cash -= currency;\r\n    }\r\n  });\r\n\r\n  if (remainingDue >= 0.01) {\r\n    showStatus(\"Status: INSUFFICIENT_FUNDS\");\r\n  } else {\r\n    withdrawFromDrawer(cid);\r\n  }\r\n};\r\n\r\nconst withdrawFromDrawer = (cid) => {\r\n  changeDue.forEach((changeItem) => {\r\n    cid.forEach((cidItem, i) => {\r\n      if (cidItem[0] === changeItem[0]) {\r\n        cid[i][1] -= changeItem[1];\r\n      }\r\n    });\r\n  });\r\n\r\n  displayChange(cid);\r\n  (0,_user_input_js__WEBPACK_IMPORTED_MODULE_0__.getCid)();\r\n  (0,_user_input_js__WEBPACK_IMPORTED_MODULE_0__.removePrices)();\r\n};\r\n\r\nconst displayChange = (cid) => {\r\n  const drawerCash = cid.reduce((acc, item) => item[1] + acc, 0);\r\n  _user_input_js__WEBPACK_IMPORTED_MODULE_0__.changeDueEl.innerHTML = `Status: ${drawerCash > 0 ? \"OPEN\" : \"CLOSED\"}`;\r\n\r\n  changeDue.forEach((item, index) => {\r\n    setTimeout(() => {\r\n      _user_input_js__WEBPACK_IMPORTED_MODULE_0__.changeDueEl.innerHTML += `\r\n          <div class=\"flex-between\">\r\n          <span>${item[0]}:</span>\r\n          <span>${_user_input_js__WEBPACK_IMPORTED_MODULE_0__.isPKR ? \"Rs. \" : \"$ \"}${item[1].toFixed(2)}</span>\r\n          </div>\r\n        `;\r\n    }, index * 50);\r\n  });\r\n};\r\n\r\n// event listeners\r\ncalculateBtn.addEventListener(\"click\", () => {\r\n  const inputValue = parseFloat(_user_input_js__WEBPACK_IMPORTED_MODULE_0__.cashInputEl.value);\r\n\r\n  if (inputValue) {\r\n    checkPurchase(inputValue);\r\n    _user_input_js__WEBPACK_IMPORTED_MODULE_0__.cashInputEl.value = \"\";\r\n  }\r\n});\r\n\r\nwindow.addEventListener(\"keydown\", (e) => {\r\n  if (e.key === \"Enter\") {\r\n    e.preventDefault();\r\n    (0,_user_input_js__WEBPACK_IMPORTED_MODULE_0__.getCid)();\r\n    calculateBtn.click();\r\n  }\r\n});\r\n\r\ncloseBtn.addEventListener(\"click\", () => {\r\n  introSection.style.display = \"none\";\r\n});\r\n\r\nhowToUseBtn.addEventListener(\"click\", () => {\r\n  introSection.style.display = \"flex\";\r\n});\r\n\n\n//# sourceURL=webpack://change-champ/./src/index.js?");

/***/ }),

/***/ "./src/user-input.js":
/*!***************************!*\
  !*** ./src/user-input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateAndSaveCid: () => (/* binding */ calculateAndSaveCid),\n/* harmony export */   cashDue: () => (/* binding */ cashDue),\n/* harmony export */   cashInputEl: () => (/* binding */ cashInputEl),\n/* harmony export */   changeDueEl: () => (/* binding */ changeDueEl),\n/* harmony export */   cidArr: () => (/* binding */ cidArr),\n/* harmony export */   currencyValues: () => (/* binding */ currencyValues),\n/* harmony export */   getCid: () => (/* binding */ getCid),\n/* harmony export */   isPKR: () => (/* binding */ isPKR),\n/* harmony export */   removePrices: () => (/* binding */ removePrices),\n/* harmony export */   setCashDue: () => (/* binding */ setCashDue),\n/* harmony export */   totalAmount: () => (/* binding */ totalAmount),\n/* harmony export */   totalDueEl: () => (/* binding */ totalDueEl)\n/* harmony export */ });\nconst cashInputEl = document.querySelector(\"#cash\");\r\nconst clearBtn = document.querySelector(\"#clear-btn\");\r\nconst totalDueEl = document.querySelector(\"#total-due\");\r\n\r\nconst priceContainer = document.querySelector(\"#price-container\");\r\nconst addPriceInputBtn = document.querySelector(\"#add-price-input-btn\");\r\nconst clearPricesBtn = document.querySelector(\"#clear-prices-btn\");\r\nconst totalAmountEl = document.querySelector(\"#total-amount\");\r\n\r\nconst changeDueEl = document.querySelector(\"#change-due\");\r\n\r\nconst currencyType = document.querySelector(\"#currency-type\");\r\nconst cidTable = document.querySelector(\"#cid-table\");\r\nconst saveBtn = document.querySelector(\"#save-btn\");\r\nconst editBtn = document.querySelector(\"#edit-btn\");\r\n\r\nlet prices = [];\r\n\r\nconst cid = {\r\n  PKR: [\r\n    [\"ONE\", 0],\r\n    [\"TWO\", 0],\r\n    [\"FIVE\", 0],\r\n    [\"TEN\", 0],\r\n    [\"TWENTY\", 0],\r\n    [\"FIFTY\", 0],\r\n    [\"HUNDRED\", 0],\r\n    [\"FIVE HUNDRED\", 0],\r\n    [\"THOUSAND\", 0],\r\n    [\"FIVE THOUSAND\", 0],\r\n  ],\r\n  USD: [\r\n    [\"PENNY\", 0],\r\n    [\"NICKEL\", 0],\r\n    [\"DIME\", 0],\r\n    [\"QUARTER\", 0],\r\n    [\"ONE\", 0],\r\n    [\"FIVE\", 0],\r\n    [\"TEN\", 0],\r\n    [\"TWENTY\", 0],\r\n    [\"ONE HUNDRED\", 0],\r\n  ],\r\n};\r\n\r\nconst currencyValues = [\r\n  {\r\n    ONE: 1,\r\n    TWO: 2,\r\n    FIVE: 5,\r\n    TEN: 10,\r\n    TWENTY: 20,\r\n    FIFTY: 50,\r\n    HUNDRED: 100,\r\n    \"FIVE HUNDRED\": 500,\r\n    THOUSAND: 1000,\r\n    \"FIVE THOUSAND\": 5000,\r\n  },\r\n  {\r\n    PENNY: 0.01,\r\n    NICKEL: 0.05,\r\n    DIME: 0.1,\r\n    QUARTER: 0.25,\r\n    ONE: 1,\r\n    FIVE: 5,\r\n    TEN: 10,\r\n    TWENTY: 20,\r\n    \"ONE HUNDRED\": 100,\r\n  },\r\n];\r\n\r\nlet isPKR = true;\r\nlet cidArr = cid.PKR;\r\nlet cidInputs;\r\nlet priceInputEls;\r\nlet totalAmount;\r\nlet cashDue;\r\n\r\nconst getTotalAmount = () => {\r\n  priceInputEls.forEach((priceEl, index) => {\r\n    prices[index] = parseFloat(priceEl.value);\r\n  });\r\n\r\n  totalAmount = prices.reduce((acc, price) => price + acc, 0);\r\n  totalAmountEl.textContent = `${isPKR ? \"Rs.\" : \"$\"} ${totalAmount}`;\r\n};\r\n\r\nconst createPriceInputEl = () => {\r\n  if (priceInputEls.length < 10) {\r\n    const input = document.createElement(\"input\");\r\n    input.classList.add(\"price\", \"input\");\r\n    input.placeholder = \"Enter price\";\r\n\r\n    priceContainer.appendChild(input);\r\n\r\n    addEventToPriceInput();\r\n  }\r\n};\r\n\r\nconst addEventToPriceInput = () => {\r\n  priceInputEls = document.querySelectorAll(\".price\");\r\n\r\n  priceInputEls.forEach((priceEl) => {\r\n    priceEl.addEventListener(\"input\", getTotalAmount);\r\n  });\r\n};\r\n\r\nconst removePrices = () => {\r\n  prices = [];\r\n  priceInputEls.forEach((priceEl) => (priceEl.value = 0));\r\n  totalAmount = 0;\r\n  totalAmountEl.textContent = totalAmount;\r\n};\r\n\r\nconst createCidTable = () => {\r\n  cidTable.innerHTML = \"\";\r\n\r\n  cidArr.forEach((item) => {\r\n    const tr = document.createElement(\"tr\");\r\n    tr.innerHTML = `\r\n      <td class=\"label-td\"><label for=\"${item[0]}\">${item[0]}</label></td>\r\n      <td>x</td>\r\n      <td>\r\n      <input autofocus type=\"number\" name=\"${item[0]}\" id=\"${item[0]}\" />\r\n      </td>\r\n      <td>${isPKR ? \"Rs.\" : \"$\"} \r\n      <span id=\"${item[0]}-total\">${item[1]}</span>\r\n      </td>\r\n    `;\r\n\r\n    cidTable.appendChild(tr);\r\n  });\r\n\r\n  const tr = document.createElement(\"tr\");\r\n  tr.innerHTML = `\r\n    <td style=\"text-transform: uppercase\" colspan=\"3\">\r\n    Total cash in drawer:\r\n    </td>\r\n    <td id=\"total-cid\">${isPKR ? \"Rs.\" : \"$\"}</td>\r\n  `;\r\n  cidTable.appendChild(tr);\r\n\r\n  cidInputs = document.querySelectorAll(\".cid-container input\");\r\n};\r\n\r\nconst getCid = () => {\r\n  const currValues = isPKR ? currencyValues[0] : currencyValues[1];\r\n\r\n  cidInputs.forEach((item, index) => {\r\n    const value = item.value === \"\" ? 0 : parseFloat(item.value);\r\n    cidArr[index][1] += value * currValues[cidArr[index][0]];\r\n  });\r\n\r\n  calculateAndSaveCid();\r\n  cidInputs.forEach((item) => (item.value = 0));\r\n};\r\n\r\nconst calculateAndSaveCid = () => {\r\n  cidArr.forEach((item) => {\r\n    const id = `${item[0]}-total`;\r\n    const total = document.getElementById(id);\r\n    total.textContent = item[1].toFixed(2);\r\n  });\r\n\r\n  const totalCidEl = document.querySelector(\"#total-cid\");\r\n  const totalCid = cidArr.reduce((acc, item) => item[1] + acc, 0).toFixed(2);\r\n  totalCidEl.textContent = `${isPKR ? \"Rs.\" : \"$\"} ${totalCid}`;\r\n\r\n  changeEnableStateOfCidInputs(true);\r\n  saveBtn.removeEventListener(\"click\", getCid);\r\n  saveBtn.textContent = \"Save\";\r\n  editBtn.style.display = \"inline\";\r\n};\r\n\r\nconst changeEnableStateOfCidInputs = (state) => {\r\n  cidInputs.forEach((item) => (item.disabled = state));\r\n};\r\n\r\nconst reset = () => {\r\n  cashInputEl.value = \"\";\r\n  changeDueEl.innerHTML = \"\";\r\n  cidInputs.forEach((item) => (item.value = 0));\r\n  cashDue = 0;\r\n  totalDueEl.textContent = `${isPKR ? \"Rs. \" : \"$ \"}${cashDue}`;\r\n};\r\n\r\nconst setCashDue = (val) => {\r\n  // this function made just for allowing script.js to modify imported variable cashDue\r\n  cashDue = val;\r\n};\r\n\r\n// EventListeners\r\naddPriceInputBtn.addEventListener(\"click\", createPriceInputEl);\r\n\r\nclearPricesBtn.addEventListener(\"click\", removePrices);\r\n\r\nsaveBtn.addEventListener(\"click\", getCid);\r\n\r\neditBtn.addEventListener(\"click\", () => {\r\n  changeEnableStateOfCidInputs(false);\r\n  saveBtn.textContent = \"Update\";\r\n  saveBtn.addEventListener(\"click\", getCid);\r\n\r\n  reset();\r\n});\r\n\r\ncurrencyType.addEventListener(\"change\", (e) => {\r\n  isPKR = e.target.value === \"pkr\" ? true : false;\r\n  cidArr = isPKR ? cid.PKR : cid.USD;\r\n  createCidTable();\r\n\r\n  changeEnableStateOfCidInputs(false);\r\n  saveBtn.addEventListener(\"click\", getCid);\r\n  saveBtn.textContent = \"Save\";\r\n  editBtn.style.display = \"none\";\r\n\r\n  reset();\r\n  removePrices();\r\n});\r\n\r\nclearBtn.addEventListener(\"click\", reset);\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  createCidTable();\r\n  addEventToPriceInput();\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://change-champ/./src/user-input.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/user-input.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
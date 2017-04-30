"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "dscrb",
              			"path": "dscrb/descriptor.module.js",
              			"file": "descriptor.module.js",
              			"module": "dscrb",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/dscrb.git",
              			"test": "dscrb-test.js",
              			"class": true,
              			"global": false
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Descriptor class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"allkey": "allkey",
              			"anykey": "anykey",
              			"falzy": "falzy",
              			"harden": "harden",
              			"kein": "kein",
              			"protype": "protype"
              		}
              	@end-include
              */var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var allkey = require("allkey");
var anykey = require("anykey");
var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var protype = require("protype");

var PROPERTY = (0, _symbol2.default)("property");
var ENTITY = (0, _symbol2.default)("entity");
var DESCRIPTOR = (0, _symbol2.default)("descriptor");
var TYPE = (0, _symbol2.default)("type");

harden("DATA_DESCRIPTOR", "data-descriptor");
harden("ACCESSOR_DESCRIPTOR", "accessor-descriptor");var

Descriptor = function () {
	function Descriptor(property, entity) {(0, _classCallCheck3.default)(this, Descriptor);
		/*;
                                                                                         	@meta-configuration:
                                                                                         		{
                                                                                         			"property:required": [
                                                                                         				"number"
                                                                                         				"string",
                                                                                         				"symbol"
                                                                                         			],
                                                                                         			"entity": "*"
                                                                                         		}
                                                                                         	@end-meta-configuration
                                                                                         */

		if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
			throw new Error("invalid property");
		}

		if (falzy(entity)) {
			throw new Error("invalid entity");
		}

		if (!kein(property, entity)) {
			throw new Error("property does not exists");
		}

		this[PROPERTY] = property;
		this[ENTITY] = entity;

		this.describe();
		this.determine();
	}(0, _createClass3.default)(Descriptor, [{ key: "describe", value: function describe()

		{
			this[DESCRIPTOR] = (0, _getOwnPropertyDescriptor2.default)(this[ENTITY], this[PROPERTY]);

			return this;
		} }, { key: "determine", value: function determine()

		{
			if (anykey(["get", "set"], this[DESCRIPTOR])) {
				this[TYPE] = ACCESSOR_DESCRIPTOR;
			}

			if (allkey(["value", "writable"], this[DESCRIPTOR])) {
				this[TYPE] = DATA_DESCRIPTOR;
			}

			return this;
		} }, { key: "resolve", value: function resolve()

		{
			if (this[TYPE] === ACCESSOR_DESCRIPTOR) {
				this.get = this[DESCRIPTOR].get;
				this.set = this[DESCRIPTOR].set;

				return {
					"get": this.get,
					"set": this.set,

					"configurable": this[DESCRIPTOR].configurable,
					"enumerable": this[DESCRIPTOR].enumerable };

			}

			if (this[TYPE] === DATA_DESCRIPTOR) {
				return {
					"value": this[DESCRIPTOR].value,
					"writable": this[DESCRIPTOR].writable,

					"configurable": this[DESCRIPTOR].configurable,
					"enumerable": this[DESCRIPTOR].enumerable };

			}

			return {};
		} }, { key: "value", value: function value()

		{
			return this[DESCRIPTOR].value;
		} }, { key: "writable", value: function writable()

		{
			return this[DESCRIPTOR].writable;
		} }, { key: "configurable", value: function configurable()

		{
			return this[DESCRIPTOR].configurable;
		} }, { key: "enumerable", value: function enumerable()

		{
			return this[DESCRIPTOR].enumerable;
		} }, { key: "as", value: function as(

		type) {
			/*;
         	@meta-configuration:
         		{
         			"type:required": [
         				"string",
         				ACCESSOR_DESCRIPTOR,
         				DATA_DESCRIPTOR
         			]
         		}
         	@end-meta-configuration
         */

			return this[TYPE] === type;
		} }, { key: "flush", value: function flush()

		{
			delete this[ENTITY];
			delete this[PROPERTY];

			return this;
		} }, { key: "toJSON", value: function toJSON()

		{
			return this.resolve();
		} }, { key: "valueOf", value: function valueOf()

		{
			return this.resolve();
		} }, { key: "toString", value: function toString()

		{
			return (0, _stringify2.default)(this.toJSON());
		} }]);return Descriptor;}();


module.exports = Descriptor;

//# sourceMappingURL=descriptor.js.map
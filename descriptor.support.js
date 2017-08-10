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
              
              		This class was designed with strict adherence to the descriptor specification.
              		Certain methods may throw error if misused properly.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"allkey": "allkey",
              			"anykey": "anykey",
              			"falzy": "falzy",
              			"harden": "harden",
              			"kein": "kein",
              			"protype": "protype",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var allkey = require("allkey");
var anykey = require("anykey");
var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var protype = require("protype");
var wichevr = require("wichevr");

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
			this[DESCRIPTOR] = wichevr((0, _getOwnPropertyDescriptor2.default)(this[ENTITY], this[PROPERTY]),
			{
				"value": this[ENTITY][this[PROPERTY]],
				"writable": true,

				"configurable": true,
				"enumerable": protype(this[PROPERTY], SYMBOL) ? false : true });


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
			var descriptor = {
				"configurable": this[DESCRIPTOR].configurable,
				"enumerable": this[DESCRIPTOR].enumerable };


			if (this[TYPE] === ACCESSOR_DESCRIPTOR) {
				descriptor.get = this[DESCRIPTOR].get;
				descriptor.set = this[DESCRIPTOR].set;
			}

			if (this[TYPE] === DATA_DESCRIPTOR) {
				descriptor.value = this[DESCRIPTOR].value;
				descriptor.writable = this[DESCRIPTOR].writable;
			}

			return descriptor;
		} }, { key: "get", value: function get()

		{
			if (this[TYPE] === DATA_DESCRIPTOR) {
				throw new Error("cannot access get on data descriptor");
			}

			return this[DESCRIPTOR].get.apply(this[ENTITY], raze(arguments));
		} }, { key: "set", value: function set()

		{
			if (this[TYPE] === DATA_DESCRIPTOR) {
				throw new Error("cannot access set on data descriptor");
			}

			return this[DESCRIPTOR].set.apply(this[ENTITY], raze(arguments));
		} }, { key: "value", value: function value()

		{
			if (this[TYPE] === ACCESSOR_DESCRIPTOR) {
				throw new Error("cannot access value on accessor descriptor");
			}

			return this[DESCRIPTOR].value;
		} }, { key: "writable", value: function writable()

		{
			if (this[TYPE] === ACCESSOR_DESCRIPTOR) {
				throw new Error("cannot access writable on accessor descriptor");
			}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NyaXB0b3Iuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhbGxrZXkiLCJyZXF1aXJlIiwiYW55a2V5IiwiZmFsenkiLCJoYXJkZW4iLCJrZWluIiwicHJvdHlwZSIsIndpY2hldnIiLCJQUk9QRVJUWSIsIkVOVElUWSIsIkRFU0NSSVBUT1IiLCJUWVBFIiwiRGVzY3JpcHRvciIsInByb3BlcnR5IiwiZW50aXR5IiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiRXJyb3IiLCJkZXNjcmliZSIsImRldGVybWluZSIsIkFDQ0VTU09SX0RFU0NSSVBUT1IiLCJEQVRBX0RFU0NSSVBUT1IiLCJkZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsInZhbHVlIiwid3JpdGFibGUiLCJhcHBseSIsInJhemUiLCJhcmd1bWVudHMiLCJ0eXBlIiwicmVzb2x2ZSIsInRvSlNPTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sVUFBVU4sUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1PLFdBQVcsc0JBQVEsVUFBUixDQUFqQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsYUFBYSxzQkFBUSxZQUFSLENBQW5CO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUFQLE9BQVEs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dkIsQ0FBOEIsS0FBTXJCLE1BQU4sQ0FBOUIsRUFBOENzQixLQUFNQyxTQUFOLENBQTlDLENBQVA7QUFDQSxHOztBQUVPO0FBQ1AsT0FBSSxLQUFNckIsSUFBTixNQUFpQlUsbUJBQXJCLEVBQTBDO0FBQ3pDLFVBQU0sSUFBSUgsS0FBSixDQUFXLDRDQUFYLENBQU47QUFDQTs7QUFFRCxVQUFPLEtBQU1SLFVBQU4sRUFBbUJrQixLQUExQjtBQUNBLEc7O0FBRVU7QUFDVixPQUFJLEtBQU1qQixJQUFOLE1BQWlCVSxtQkFBckIsRUFBMEM7QUFDekMsVUFBTSxJQUFJSCxLQUFKLENBQVcsK0NBQVgsQ0FBTjtBQUNBOztBQUVELFVBQU8sS0FBTVIsVUFBTixFQUFtQm1CLFFBQTFCO0FBQ0EsRzs7QUFFYztBQUNkLFVBQU8sS0FBTW5CLFVBQU4sRUFBbUJjLFlBQTFCO0FBQ0EsRzs7QUFFWTtBQUNaLFVBQU8sS0FBTWQsVUFBTixFQUFtQmUsVUFBMUI7QUFDQSxHOztBQUVHUSxNLEVBQU07QUFDVDs7Ozs7Ozs7Ozs7O0FBWUEsVUFBTyxLQUFNdEIsSUFBTixNQUFpQnNCLElBQXhCO0FBQ0EsRzs7QUFFTztBQUNQLFVBQU8sS0FBTXhCLE1BQU4sQ0FBUDtBQUNBLFVBQU8sS0FBTUQsUUFBTixDQUFQOztBQUVBLFVBQU8sSUFBUDtBQUNBLEc7O0FBRVE7QUFDUixVQUFPLEtBQUswQixPQUFMLEVBQVA7QUFDQSxHOztBQUVTO0FBQ1QsVUFBTyxLQUFLQSxPQUFMLEVBQVA7QUFDQSxHOztBQUVVO0FBQ1YsVUFBTyx5QkFBZ0IsS0FBS0MsTUFBTCxFQUFoQixDQUFQO0FBQ0EsRzs7O0FBR0ZDLE9BQU9DLE9BQVAsR0FBaUJ6QixVQUFqQiIsImZpbGUiOiJkZXNjcmlwdG9yLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZHNjcmJcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZHNjcmIvZGVzY3JpcHRvci5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZGVzY3JpcHRvci5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJkc2NyYlwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZHNjcmIuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImRzY3JiLXRlc3QuanNcIixcclxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlLFxyXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZVxyXG5cdFx0fVxyXG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RGVzY3JpcHRvciBjbGFzcyB3cmFwcGVyLlxyXG5cclxuXHRcdFRoaXMgY2xhc3Mgd2FzIGRlc2lnbmVkIHdpdGggc3RyaWN0IGFkaGVyZW5jZSB0byB0aGUgZGVzY3JpcHRvciBzcGVjaWZpY2F0aW9uLlxyXG5cdFx0Q2VydGFpbiBtZXRob2RzIG1heSB0aHJvdyBlcnJvciBpZiBtaXN1c2VkIHByb3Blcmx5LlxyXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYWxsa2V5XCI6IFwiYWxsa2V5XCIsXHJcblx0XHRcdFwiYW55a2V5XCI6IFwiYW55a2V5XCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxyXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhbGxrZXkgPSByZXF1aXJlKCBcImFsbGtleVwiICk7XHJcbmNvbnN0IGFueWtleSA9IHJlcXVpcmUoIFwiYW55a2V5XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xyXG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xyXG5cclxuY29uc3QgUFJPUEVSVFkgPSBTeW1ib2woIFwicHJvcGVydHlcIiApO1xyXG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcclxuY29uc3QgREVTQ1JJUFRPUiA9IFN5bWJvbCggXCJkZXNjcmlwdG9yXCIgKTtcclxuY29uc3QgVFlQRSA9IFN5bWJvbCggXCJ0eXBlXCIgKTtcclxuXHJcbmhhcmRlbiggXCJEQVRBX0RFU0NSSVBUT1JcIiwgXCJkYXRhLWRlc2NyaXB0b3JcIiApO1xyXG5oYXJkZW4oIFwiQUNDRVNTT1JfREVTQ1JJUFRPUlwiLCBcImFjY2Vzc29yLWRlc2NyaXB0b3JcIiApO1xyXG5cclxuY2xhc3MgRGVzY3JpcHRvciB7XHJcblx0Y29uc3RydWN0b3IoIHByb3BlcnR5LCBlbnRpdHkgKXtcclxuXHRcdC8qO1xyXG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcImVudGl0eVwiOiBcIipcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHRcdCovXHJcblxyXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCBmYWx6eSggZW50aXR5ICkgKXtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggIWtlaW4oIHByb3BlcnR5LCBlbnRpdHkgKSApe1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicHJvcGVydHkgZG9lcyBub3QgZXhpc3RzXCIgKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzWyBQUk9QRVJUWSBdID0gcHJvcGVydHk7XHJcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcclxuXHJcblx0XHR0aGlzLmRlc2NyaWJlKCApO1xyXG5cdFx0dGhpcy5kZXRlcm1pbmUoICk7XHJcblx0fVxyXG5cclxuXHRkZXNjcmliZSggKXtcclxuXHRcdHRoaXNbIERFU0NSSVBUT1IgXSA9IHdpY2hldnIoIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXNbIEVOVElUWSBdLCB0aGlzWyBQUk9QRVJUWSBdICksXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInZhbHVlXCI6IHRoaXNbIEVOVElUWSBdWyB0aGlzWyBQUk9QRVJUWSBdIF0sXHJcblx0XHRcdFx0XCJ3cml0YWJsZVwiOiB0cnVlLFxyXG5cclxuXHRcdFx0XHRcImNvbmZpZ3VyYWJsZVwiOiB0cnVlLFxyXG5cdFx0XHRcdFwiZW51bWVyYWJsZVwiOiAoIHByb3R5cGUoIHRoaXNbIFBST1BFUlRZIF0sIFNZTUJPTCApPyBmYWxzZSA6IHRydWUgKVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRkZXRlcm1pbmUoICl7XHJcblx0XHRpZiggYW55a2V5KCBbIFwiZ2V0XCIsIFwic2V0XCIgXSwgdGhpc1sgREVTQ1JJUFRPUiBdICkgKXtcclxuXHRcdFx0dGhpc1sgVFlQRSBdID0gQUNDRVNTT1JfREVTQ1JJUFRPUjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggYWxsa2V5KCBbIFwidmFsdWVcIiwgXCJ3cml0YWJsZVwiIF0sIHRoaXNbIERFU0NSSVBUT1IgXSApICl7XHJcblx0XHRcdHRoaXNbIFRZUEUgXSA9IERBVEFfREVTQ1JJUFRPUjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHJlc29sdmUoICl7XHJcblx0XHRsZXQgZGVzY3JpcHRvciA9IHtcclxuXHRcdFx0XCJjb25maWd1cmFibGVcIjogdGhpc1sgREVTQ1JJUFRPUiBdLmNvbmZpZ3VyYWJsZSxcclxuXHRcdFx0XCJlbnVtZXJhYmxlXCI6IHRoaXNbIERFU0NSSVBUT1IgXS5lbnVtZXJhYmxlXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKCB0aGlzWyBUWVBFIF0gPT09IEFDQ0VTU09SX0RFU0NSSVBUT1IgKXtcclxuXHRcdFx0ZGVzY3JpcHRvci5nZXQgPSB0aGlzWyBERVNDUklQVE9SIF0uZ2V0O1xyXG5cdFx0XHRkZXNjcmlwdG9yLnNldCA9IHRoaXNbIERFU0NSSVBUT1IgXS5zZXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIHRoaXNbIFRZUEUgXSA9PT0gREFUQV9ERVNDUklQVE9SICl7XHJcblx0XHRcdGRlc2NyaXB0b3IudmFsdWUgPSB0aGlzWyBERVNDUklQVE9SIF0udmFsdWU7XHJcblx0XHRcdGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0aGlzWyBERVNDUklQVE9SIF0ud3JpdGFibGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRlc2NyaXB0b3I7XHJcblx0fVxyXG5cclxuXHRnZXQoICl7XHJcblx0XHRpZiggdGhpc1sgVFlQRSBdID09PSBEQVRBX0RFU0NSSVBUT1IgKXtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBhY2Nlc3MgZ2V0IG9uIGRhdGEgZGVzY3JpcHRvclwiICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXNbIERFU0NSSVBUT1IgXS5nZXQuYXBwbHkoIHRoaXNbIEVOVElUWSBdLCByYXplKCBhcmd1bWVudHMgKSApO1xyXG5cdH1cclxuXHJcblx0c2V0KCApe1xyXG5cdFx0aWYoIHRoaXNbIFRZUEUgXSA9PT0gREFUQV9ERVNDUklQVE9SICl7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgYWNjZXNzIHNldCBvbiBkYXRhIGRlc2NyaXB0b3JcIiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzWyBERVNDUklQVE9SIF0uc2V0LmFwcGx5KCB0aGlzWyBFTlRJVFkgXSwgcmF6ZSggYXJndW1lbnRzICkgKTtcclxuXHR9XHJcblxyXG5cdHZhbHVlKCApe1xyXG5cdFx0aWYoIHRoaXNbIFRZUEUgXSA9PT0gQUNDRVNTT1JfREVTQ1JJUFRPUiApe1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGFjY2VzcyB2YWx1ZSBvbiBhY2Nlc3NvciBkZXNjcmlwdG9yXCIgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpc1sgREVTQ1JJUFRPUiBdLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0d3JpdGFibGUoICl7XHJcblx0XHRpZiggdGhpc1sgVFlQRSBdID09PSBBQ0NFU1NPUl9ERVNDUklQVE9SICl7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgYWNjZXNzIHdyaXRhYmxlIG9uIGFjY2Vzc29yIGRlc2NyaXB0b3JcIiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzWyBERVNDUklQVE9SIF0ud3JpdGFibGU7XHJcblx0fVxyXG5cclxuXHRjb25maWd1cmFibGUoICl7XHJcblx0XHRyZXR1cm4gdGhpc1sgREVTQ1JJUFRPUiBdLmNvbmZpZ3VyYWJsZTtcclxuXHR9XHJcblxyXG5cdGVudW1lcmFibGUoICl7XHJcblx0XHRyZXR1cm4gdGhpc1sgREVTQ1JJUFRPUiBdLmVudW1lcmFibGU7XHJcblx0fVxyXG5cclxuXHRhcyggdHlwZSApe1xyXG5cdFx0Lyo7XHJcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0eXBlOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFx0QUNDRVNTT1JfREVTQ1JJUFRPUixcclxuXHRcdFx0XHRcdFx0REFUQV9ERVNDUklQVE9SXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdFx0Ki9cclxuXHJcblx0XHRyZXR1cm4gdGhpc1sgVFlQRSBdID09PSB0eXBlO1xyXG5cdH1cclxuXHJcblx0Zmx1c2goICl7XHJcblx0XHRkZWxldGUgdGhpc1sgRU5USVRZIF07XHJcblx0XHRkZWxldGUgdGhpc1sgUFJPUEVSVFkgXTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRvSlNPTiggKXtcclxuXHRcdHJldHVybiB0aGlzLnJlc29sdmUoICk7XHJcblx0fVxyXG5cclxuXHR2YWx1ZU9mKCApe1xyXG5cdFx0cmV0dXJuIHRoaXMucmVzb2x2ZSggKTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCApe1xyXG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzLnRvSlNPTiggKSApO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZXNjcmlwdG9yO1xyXG4iXX0=
//# sourceMappingURL=descriptor.support.js.map

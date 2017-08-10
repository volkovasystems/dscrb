"use strict";var _freeze=require("babel-runtime/core-js/object/freeze");var _freeze2=_interopRequireDefault(_freeze);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "dscrb",
			"path": "dscrb/dscrb.module.js",
			"file": "dscrb.module.js",
			"module": "dscrb",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/dscrb.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Get property descriptor.

		Note that you should only use this if the property exists on the entity.
		This will throw an error if property does not exists.

		This will always return an instance of the Descriptor class.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"zelf": "zelf"
		}
	@end-include
*/

var harden=require("harden");
var zelf=require("zelf");



//: @client:
var Descriptor=require("./descriptor.support.js");
//: @end-client

var dscrb=function dscrb(property,entity){
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

if(arguments.length==1){
entity=zelf(this);
}

return(0,_freeze2.default)(new Descriptor(property,entity));
};

harden("Descriptor",Descriptor,dscrb);

module.exports=dscrb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzY3JiLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiaGFyZGVuIiwicmVxdWlyZSIsInplbGYiLCJEZXNjcmlwdG9yIiwiZHNjcmIiLCJwcm9wZXJ0eSIsImVudGl0eSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJ3TUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxHQUFNQSxRQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLEdBQU1DLE1BQU9ELFFBQVMsTUFBVCxDQUFiOzs7O0FBSUE7QUFDQSxHQUFNRSxZQUFhRixRQUFTLHlCQUFULENBQW5CO0FBQ0E7O0FBRUEsR0FBTUcsT0FBUSxRQUFTQSxNQUFULENBQWdCQyxRQUFoQixDQUEwQkMsTUFBMUIsQ0FBa0M7QUFDL0M7Ozs7Ozs7Ozs7Ozs7QUFhQSxHQUFJQyxVQUFVQyxNQUFWLEVBQW9CLENBQXhCLENBQTJCO0FBQzFCRixPQUFTSixLQUFNLElBQU4sQ0FBVDtBQUNBOztBQUVELE1BQU8scUJBQWUsR0FBSUMsV0FBSixDQUFnQkUsUUFBaEIsQ0FBMEJDLE1BQTFCLENBQWYsQ0FBUDtBQUNBLENBbkJEOztBQXFCQU4sT0FBUSxZQUFSLENBQXNCRyxVQUF0QixDQUFrQ0MsS0FBbEM7O0FBRUFLLE9BQU9DLE9BQVAsQ0FBaUJOLEtBQWpCIiwiZmlsZSI6ImRzY3JiLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZHNjcmJcIixcblx0XHRcdFwicGF0aFwiOiBcImRzY3JiL2RzY3JiLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZHNjcmIubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRzY3JiXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kc2NyYi5naXRcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0R2V0IHByb3BlcnR5IGRlc2NyaXB0b3IuXG5cblx0XHROb3RlIHRoYXQgeW91IHNob3VsZCBvbmx5IHVzZSB0aGlzIGlmIHRoZSBwcm9wZXJ0eSBleGlzdHMgb24gdGhlIGVudGl0eS5cblx0XHRUaGlzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgcHJvcGVydHkgZG9lcyBub3QgZXhpc3RzLlxuXG5cdFx0VGhpcyB3aWxsIGFsd2F5cyByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgdGhlIERlc2NyaXB0b3IgY2xhc3MuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBEZXNjcmlwdG9yID0gcmVxdWlyZSggXCIuL2Rlc2NyaXB0b3Iuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgZHNjcmIgPSBmdW5jdGlvbiBkc2NyYiggcHJvcGVydHksIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm51bWJlclwiXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZW50aXR5XCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAxICl7XG5cdFx0ZW50aXR5ID0gemVsZiggdGhpcyApO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5mcmVlemUoIG5ldyBEZXNjcmlwdG9yKCBwcm9wZXJ0eSwgZW50aXR5ICkgKTtcbn07XG5cbmhhcmRlbiggXCJEZXNjcmlwdG9yXCIsIERlc2NyaXB0b3IsIGRzY3JiICk7XG5cbm1vZHVsZS5leHBvcnRzID0gZHNjcmI7XG4iXX0=
//# sourceMappingURL=dscrb.support.js.map

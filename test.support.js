"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "dscrb",
			"path": "dscrb/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/dscrb.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"dscrb": "dscrb",
			"path": "path"
		}
	@end-include
*/var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var assert=require("should");



//: @client:
var dscrb=require("./dscrb.support.js");
//: @end-client





//: @client:
describe("dscrb",function(){

describe("`dscrb( 'property', { 'property': 'value' } )`",function(){
it("should return an instance of Descriptor",function(){
var descriptor=dscrb("property",{"property":"value"});

assert.equal(descriptor instanceof dscrb.Descriptor,true);
});
});

describe("`dscrb( 'property', { 'property': 'value' } ).describe( )`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
var descriptor=dscrb("property",{"property":"value"}).describe();

assert.equal(typeof descriptor==="undefined"?"undefined":(0,_typeof3.default)(descriptor),"object");

assert.equal("value"in descriptor,true);

assert.equal("get"in descriptor,true);

assert.equal("set"in descriptor,true);

assert.equal("configurable"in descriptor,true);

assert.equal("enumerable"in descriptor,true);

assert.equal("writable"in descriptor,true);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZHNjcmIiLCJkZXNjcmliZSIsIml0IiwiZGVzY3JpcHRvciIsImVxdWFsIiwiRGVzY3JpcHRvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLEdBQU1BLFFBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxHQUFNQyxPQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxPQUFWLENBQW1CLFVBQU87O0FBRXpCQSxTQUFVLGdEQUFWLENBQTRELFVBQU87QUFDbEVDLEdBQUkseUNBQUosQ0FBK0MsVUFBTztBQUNyRCxHQUFJQyxZQUFhSCxNQUFPLFVBQVAsQ0FBbUIsQ0FBRSxXQUFZLE9BQWQsQ0FBbkIsQ0FBakI7O0FBRUFGLE9BQU9NLEtBQVAsQ0FBY0QscUJBQXNCSCxPQUFNSyxVQUExQyxDQUFzRCxJQUF0RDtBQUNBLENBSkQ7QUFLQSxDQU5EOztBQVFBSixTQUFVLDREQUFWLENBQXdFLFVBQU87QUFDOUVDLEdBQUksdUVBQUosQ0FBNkUsVUFBTztBQUNuRixHQUFJQyxZQUFhSCxNQUFPLFVBQVAsQ0FBbUIsQ0FBRSxXQUFZLE9BQWQsQ0FBbkIsRUFBNkNDLFFBQTdDLEVBQWpCOztBQUVBSCxPQUFPTSxLQUFQLE9BQXFCRCxXQUFyQixnREFBcUJBLFVBQXJCLEVBQWlDLFFBQWpDOztBQUVBTCxPQUFPTSxLQUFQLENBQWMsU0FBV0QsV0FBekIsQ0FBcUMsSUFBckM7O0FBRUFMLE9BQU9NLEtBQVAsQ0FBYyxPQUFTRCxXQUF2QixDQUFtQyxJQUFuQzs7QUFFQUwsT0FBT00sS0FBUCxDQUFjLE9BQVNELFdBQXZCLENBQW1DLElBQW5DOztBQUVBTCxPQUFPTSxLQUFQLENBQWMsZ0JBQWtCRCxXQUFoQyxDQUE0QyxJQUE1Qzs7QUFFQUwsT0FBT00sS0FBUCxDQUFjLGNBQWdCRCxXQUE5QixDQUEwQyxJQUExQzs7QUFFQUwsT0FBT00sS0FBUCxDQUFjLFlBQWNELFdBQTVCLENBQXdDLElBQXhDO0FBQ0EsQ0FoQkQ7QUFpQkEsQ0FsQkQ7O0FBb0JBLENBOUJEO0FBK0JBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZHNjcmJcIixcblx0XHRcdFwicGF0aFwiOiBcImRzY3JiL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kc2NyYi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZHNjcmJcIjogXCJkc2NyYlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicGF0aFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZHNjcmIgPSByZXF1aXJlKCBcIi4vZHNjcmIuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImRzY3JiXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGRzY3JiKCAncHJvcGVydHknLCB7ICdwcm9wZXJ0eSc6ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGVzY3JpcHRvclwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBkc2NyYiggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yIGluc3RhbmNlb2YgZHNjcmIuRGVzY3JpcHRvciwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKS5kZXNjcmliZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGEgZGVzY3JpcHRvciBvYmplY3Qgd2l0aCBjb21wbGV0ZSBkZXNjcmlwdG9yIHByb3BlcnRpZXNcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gZHNjcmIoIFwicHJvcGVydHlcIiwgeyBcInByb3BlcnR5XCI6IFwidmFsdWVcIiB9ICkuZGVzY3JpYmUoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInZhbHVlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZ2V0XCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwic2V0XCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiY29uZmlndXJhYmxlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZW51bWVyYWJsZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIndyaXRhYmxlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map

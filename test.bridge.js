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
			"assert": "should/as-function",
			"dscrb": "dscrb",
			"path": "path"
		}
	@end-include
*/

var assert=require("should/as-function");





//: @bridge:
var path=require("path");
//: @end-bridge





//: @bridge:
describe("dscrb",function(){

var bridgeURL="file://"+path.resolve(__dirname,"bridge.html");

describe("`dscrb( 'property', { 'property': 'value' } )`",function(){
it("should return an instance of Descriptor",function(){

var result=browser.url(bridgeURL).execute(

function(){
return dscrb("property",{"property":"value"})instanceof dscrb.Descriptor;
}).

value;

assert.equal(result,true);
});
});

describe("`dscrb( 'property', { 'property': 'value' } ).describe( )`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( Object.keys( dscrb( "property", { "property": "value" } ).describe( ) ) );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.length,6);

assert.equal(descriptor.indexOf("value")>-1,true);

assert.equal(descriptor.indexOf("get")>-1,true);

assert.equal(descriptor.indexOf("set")>-1,true);

assert.equal(descriptor.indexOf("configurable")>-1,true);

assert.equal(descriptor.indexOf("enumerable")>-1,true);

assert.equal(descriptor.indexOf("writable")>-1,true);
});
});

describe("`dscrb( 'length', [ 1, 2, 3 ] ).describe( )`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( Object.keys( dscrb( "length", [ 1, 2, 3 ] ).describe( ) ) );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.length,6);

assert.equal(descriptor.indexOf("value")>-1,true);

assert.equal(descriptor.indexOf("get")>-1,true);

assert.equal(descriptor.indexOf("set")>-1,true);

assert.equal(descriptor.indexOf("configurable")>-1,true);

assert.equal(descriptor.indexOf("enumerable")>-1,true);

assert.equal(descriptor.indexOf("writable")>-1,true);
});
});

describe("`dscrb( 1, { 0: 'hello', 1: 'world' } ).describe( )`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( Object.keys( dscrb( 1, { 0: "hello", 1: "world" } ).describe( ) ) );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.length,6);

assert.equal(descriptor.indexOf("value")>-1,true);

assert.equal(descriptor.indexOf("get")>-1,true);

assert.equal(descriptor.indexOf("set")>-1,true);

assert.equal(descriptor.indexOf("configurable")>-1,true);

assert.equal(descriptor.indexOf("enumerable")>-1,true);

assert.equal(descriptor.indexOf("writable")>-1,true);

});
});

describe("`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).describe( )`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( Object.keys( dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).describe( ) ) );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.length,6);

assert.equal(descriptor.indexOf("value")>-1,true);

assert.equal(descriptor.indexOf("get")>-1,true);

assert.equal(descriptor.indexOf("set")>-1,true);

assert.equal(descriptor.indexOf("configurable")>-1,true);

assert.equal(descriptor.indexOf("enumerable")>-1,true);

assert.equal(descriptor.indexOf("writable")>-1,true);
});
});

describe("`dscrb( 'name', function yeah( ){ } ).describe( )`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( Object.keys( dscrb( "name", function yeah( ){ } ).describe( ) ) );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.length,6);

assert.equal(descriptor.indexOf("value")>-1,true);

assert.equal(descriptor.indexOf("get")>-1,true);

assert.equal(descriptor.indexOf("set")>-1,true);

assert.equal(descriptor.indexOf("configurable")>-1,true);

assert.equal(descriptor.indexOf("enumerable")>-1,true);

assert.equal(descriptor.indexOf("writable")>-1,true);

});
});

describe("`dscrb with symbol type property and function type entity`",function(){
it("should return a descriptor object with complete descriptor properties",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
					let descriptor = dscrb( Symbol.for( "extensive" ), Hello ).describe( );

					return JSON.stringify( Object.keys( descriptor ) );
				}

			).value;
			//: @end-ignore

var descriptor=JSON.parse(result);

assert.equal(descriptor.length,6);

assert.equal(descriptor.indexOf("value")>-1,true);

assert.equal(descriptor.indexOf("get")>-1,true);

assert.equal(descriptor.indexOf("set")>-1,true);

assert.equal(descriptor.indexOf("configurable")>-1,true);

assert.equal(descriptor.indexOf("enumerable")>-1,true);

assert.equal(descriptor.indexOf("writable")>-1,true);

});
});

describe("`dscrb( 'property', { 'property': 'value' } ).configurable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("property",{"property":"value"}).configurable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 'property', { 'property': 'value' } ).writable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("property",{"property":"value"}).writable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 'property', { 'property': 'value' } ).enumerable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("property",{"property":"value"}).enumerable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 'length', [ 1, 2, 3 ] ).configurable( )`",function(){
it("should be equal to false",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("length",[1,2,3]).configurable();
}).

value;

assert.equal(result,false);

});
});

describe("`dscrb( 'length', [ 1, 2, 3 ] ).writable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("length",[1,2,3]).writable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 'length', [ 1, 2, 3 ] ).enumerable( )`",function(){
it("should be equal to false",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("length",[1,2,3]).enumerable();
}).

value;

assert.equal(result,false);

});
});

describe("`dscrb( 1, { 0: 'hello', 1: 'world' } ).configurable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb(1,{0:"hello",1:"world"}).configurable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 1, { 0: 'hello', 1: 'world' } ).writable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb(1,{0:"hello",1:"world"}).writable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 1, { 0: 'hello', 1: 'world' } ).enumerable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb(1,{0:"hello",1:"world"}).enumerable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).configurable( )`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).configurable( );
				}

			).value;
			//: @end-ignore
assert.equal(result,true);

});
});

describe("`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).writable( )`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).writable( );
				}

			).value;
			//: @end-ignore
assert.equal(result,true);

});
});

describe("`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).enumerable( )`",function(){
it("should be equal to false",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).enumerable( );
				}

			).value;
			//: @end-ignore
assert.equal(result,false);

});
});

describe("`dscrb( 'name', function yeah( ){ } ).configurable( )`",function(){
it("should be equal to true",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("name",function yeah(){}).configurable();
}).

value;

assert.equal(result,true);

});
});

describe("`dscrb( 'name', function yeah( ){ } ).writable( )`",function(){
it("should be equal to false",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("name",function yeah(){}).writable();
}).

value;

assert.equal(result,false);

});
});

describe("`dscrb( 'name', function yeah( ){ } ).enumerable( )`",function(){
it("should be equal to false",function(){
var result=browser.url(bridgeURL).execute(

function(){
return dscrb("name",function yeah(){}).enumerable();
}).

value;

assert.equal(result,false);

});
});

describe("`dscrb configurable method with symbol type property and function type entity`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
					let test = dscrb( Symbol.for( "extensive" ), Hello ).configurable( );

					return test;
				}

			).value;
			//: @end-ignore

assert.equal(result,true);

});
});

describe("`dscrb writable method with symbol type property and function type entity`",function(){
it("should be equal to true",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
					let test = dscrb( Symbol.for( "extensive" ), Hello ).writable( );

					return test;
				}

			).value;
			//: @end-ignore

assert.equal(result,true);

});
});

describe("`dscrb enumerable method with symbol type property and function type entity`",function(){
it("should be equal to false",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
					let test = dscrb( Symbol.for( "extensive" ), Hello ).enumerable( );

					return test;
				}

			).value;
			//: @end-ignore

assert.equal(result,false);

});
});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImRzY3JiIiwiRGVzY3JpcHRvciIsInZhbHVlIiwiZXF1YWwiLCJkZXNjcmlwdG9yIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwiaW5kZXhPZiIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZW51bWVyYWJsZSIsInllYWgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxHQUFNQSxRQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsR0FBTUMsTUFBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxPQUFWLENBQW1CLFVBQU87O0FBRXpCLEdBQUlDLHFCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLENBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxTQUFVLGdEQUFWLENBQTRELFVBQU87QUFDbEVJLEdBQUkseUNBQUosQ0FBK0MsVUFBTzs7QUFFckQsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixVQUFXO0FBQ1YsTUFBT0MsT0FBTyxVQUFQLENBQW1CLENBQUUsV0FBWSxPQUFkLENBQW5CLFdBQXdEQSxPQUFNQyxVQUFyRTtBQUNBLENBSlc7O0FBTVhDLEtBTkY7O0FBUUFkLE9BQU9lLEtBQVAsQ0FBY1AsTUFBZCxDQUFzQixJQUF0QjtBQUNBLENBWEQ7QUFZQSxDQWJEOztBQWVBTCxTQUFVLDREQUFWLENBQXdFLFVBQU87QUFDOUVJLEdBQUksdUVBQUosQ0FBNkUsVUFBTztBQUNuRjtBQUNIOzs7Ozs7Ozs7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QTs7QUFFR1AsT0FBT2UsS0FBUCxDQUFjUCxNQUFkLENBQXNCLEtBQXRCOztBQUVBLENBbkJEO0FBb0JBLENBckJEOztBQXVCQSxDQXpnQkQ7QUEwZ0JBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkc2NyYlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZHNjcmIvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RzY3JiLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJkc2NyYlwiOiBcImRzY3JiXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmRlc2NyaWJlKCBcImRzY3JiXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERlc2NyaXB0b3JcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBkc2NyYiggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKSBpbnN0YW5jZW9mIGRzY3JiLkRlc2NyaXB0b3I7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9ICkuZGVzY3JpYmUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBhIGRlc2NyaXB0b3Igb2JqZWN0IHdpdGggY29tcGxldGUgZGVzY3JpcHRvciBwcm9wZXJ0aWVzXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBPYmplY3Qua2V5cyggZHNjcmIoIFwicHJvcGVydHlcIiwgeyBcInByb3BlcnR5XCI6IFwidmFsdWVcIiB9ICkuZGVzY3JpYmUoICkgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZSggcmVzdWx0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5sZW5ndGgsIDYgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwidmFsdWVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZ2V0XCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcInNldFwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJjb25maWd1cmFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZW51bWVyYWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJ3cml0YWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ2xlbmd0aCcsIFsgMSwgMiwgMyBdICkuZGVzY3JpYmUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBhIGRlc2NyaXB0b3Igb2JqZWN0IHdpdGggY29tcGxldGUgZGVzY3JpcHRvciBwcm9wZXJ0aWVzXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBPYmplY3Qua2V5cyggZHNjcmIoIFwibGVuZ3RoXCIsIFsgMSwgMiwgMyBdICkuZGVzY3JpYmUoICkgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZSggcmVzdWx0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5sZW5ndGgsIDYgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwidmFsdWVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZ2V0XCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcInNldFwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJjb25maWd1cmFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZW51bWVyYWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJ3cml0YWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggMSwgeyAwOiAnaGVsbG8nLCAxOiAnd29ybGQnIH0gKS5kZXNjcmliZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGEgZGVzY3JpcHRvciBvYmplY3Qgd2l0aCBjb21wbGV0ZSBkZXNjcmlwdG9yIHByb3BlcnRpZXNcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIE9iamVjdC5rZXlzKCBkc2NyYiggMSwgeyAwOiBcImhlbGxvXCIsIDE6IFwid29ybGRcIiB9ICkuZGVzY3JpYmUoICkgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZSggcmVzdWx0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5sZW5ndGgsIDYgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwidmFsdWVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZ2V0XCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcInNldFwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJjb25maWd1cmFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZW51bWVyYWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJ3cml0YWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRzY3JiKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIHsgWyBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXTogJ3Rlc3QnIH0gKS5kZXNjcmliZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGEgZGVzY3JpcHRvciBvYmplY3Qgd2l0aCBjb21wbGV0ZSBkZXNjcmlwdG9yIHByb3BlcnRpZXNcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIE9iamVjdC5rZXlzKCBkc2NyYiggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHsgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdOiBcInRlc3RcIiB9ICkuZGVzY3JpYmUoICkgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZSggcmVzdWx0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5sZW5ndGgsIDYgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwidmFsdWVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZ2V0XCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcInNldFwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJjb25maWd1cmFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZW51bWVyYWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJ3cml0YWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ25hbWUnLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICkuZGVzY3JpYmUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBhIGRlc2NyaXB0b3Igb2JqZWN0IHdpdGggY29tcGxldGUgZGVzY3JpcHRvciBwcm9wZXJ0aWVzXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBPYmplY3Qua2V5cyggZHNjcmIoIFwibmFtZVwiLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICkuZGVzY3JpYmUoICkgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZSggcmVzdWx0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5sZW5ndGgsIDYgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwidmFsdWVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZ2V0XCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcInNldFwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJjb25maWd1cmFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiZW51bWVyYWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJ3cml0YWJsZVwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRzY3JiIHdpdGggc3ltYm9sIHR5cGUgcHJvcGVydHkgYW5kIGZ1bmN0aW9uIHR5cGUgZW50aXR5YFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYSBkZXNjcmlwdG9yIG9iamVjdCB3aXRoIGNvbXBsZXRlIGRlc2NyaXB0b3IgcHJvcGVydGllc1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdEhlbGxvWyBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgXSA9IFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKTtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IGRzY3JiKCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICksIEhlbGxvICkuZGVzY3JpYmUoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIE9iamVjdC5rZXlzKCBkZXNjcmlwdG9yICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IEpTT04ucGFyc2UoIHJlc3VsdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IubGVuZ3RoLCA2ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcInZhbHVlXCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcImdldFwiICkgPiAtMSwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuaW5kZXhPZiggXCJzZXRcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwiY29uZmlndXJhYmxlXCIgKSA+IC0xLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5pbmRleE9mKCBcImVudW1lcmFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmluZGV4T2YoIFwid3JpdGFibGVcIiApID4gLTEsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKS5jb25maWd1cmFibGUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZHNjcmIoIFwicHJvcGVydHlcIiwgeyBcInByb3BlcnR5XCI6IFwidmFsdWVcIiB9ICkuY29uZmlndXJhYmxlKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9ICkud3JpdGFibGUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZHNjcmIoIFwicHJvcGVydHlcIiwgeyBcInByb3BlcnR5XCI6IFwidmFsdWVcIiB9ICkud3JpdGFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKS5lbnVtZXJhYmxlKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCBcInByb3BlcnR5XCIsIHsgXCJwcm9wZXJ0eVwiOiBcInZhbHVlXCIgfSApLmVudW1lcmFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ2xlbmd0aCcsIFsgMSwgMiwgMyBdICkuY29uZmlndXJhYmxlKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBkc2NyYiggXCJsZW5ndGhcIiwgWyAxLCAyLCAzIF0gKS5jb25maWd1cmFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoICdsZW5ndGgnLCBbIDEsIDIsIDMgXSApLndyaXRhYmxlKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCBcImxlbmd0aFwiLCBbIDEsIDIsIDMgXSApLndyaXRhYmxlKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoICdsZW5ndGgnLCBbIDEsIDIsIDMgXSApLmVudW1lcmFibGUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCBcImxlbmd0aFwiLCBbIDEsIDIsIDMgXSApLmVudW1lcmFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoIDEsIHsgMDogJ2hlbGxvJywgMTogJ3dvcmxkJyB9ICkuY29uZmlndXJhYmxlKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCAxLCB7IDA6IFwiaGVsbG9cIiwgMTogXCJ3b3JsZFwiIH0gKS5jb25maWd1cmFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggMSwgeyAwOiAnaGVsbG8nLCAxOiAnd29ybGQnIH0gKS53cml0YWJsZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBkc2NyYiggMSwgeyAwOiBcImhlbGxvXCIsIDE6IFwid29ybGRcIiB9ICkud3JpdGFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggMSwgeyAwOiAnaGVsbG8nLCAxOiAnd29ybGQnIH0gKS5lbnVtZXJhYmxlKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCAxLCB7IDA6IFwiaGVsbG9cIiwgMTogXCJ3b3JsZFwiIH0gKS5lbnVtZXJhYmxlKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoIFN5bWJvbC5mb3IoICdoZWxsbycgKSwgeyBbIFN5bWJvbC5mb3IoICdoZWxsbycgKSBdOiAndGVzdCcgfSApLmNvbmZpZ3VyYWJsZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBkc2NyYiggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHsgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdOiBcInRlc3RcIiB9ICkuY29uZmlndXJhYmxlKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRzY3JiKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIHsgWyBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXTogJ3Rlc3QnIH0gKS53cml0YWJsZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBkc2NyYiggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHsgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdOiBcInRlc3RcIiB9ICkud3JpdGFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoIFN5bWJvbC5mb3IoICdoZWxsbycgKSwgeyBbIFN5bWJvbC5mb3IoICdoZWxsbycgKSBdOiAndGVzdCcgfSApLmVudW1lcmFibGUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSwgeyBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF06IFwidGVzdFwiIH0gKS5lbnVtZXJhYmxlKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiggJ25hbWUnLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICkuY29uZmlndXJhYmxlKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCBcIm5hbWVcIiwgZnVuY3Rpb24geWVhaCggKXsgfSApLmNvbmZpZ3VyYWJsZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRzY3JiKCAnbmFtZScsIGZ1bmN0aW9uIHllYWgoICl7IH0gKS53cml0YWJsZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZHNjcmIoIFwibmFtZVwiLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICkud3JpdGFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIoICduYW1lJywgZnVuY3Rpb24geWVhaCggKXsgfSApLmVudW1lcmFibGUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRzY3JiKCBcIm5hbWVcIiwgZnVuY3Rpb24geWVhaCggKXsgfSApLmVudW1lcmFibGUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZHNjcmIgY29uZmlndXJhYmxlIG1ldGhvZCB3aXRoIHN5bWJvbCB0eXBlIHByb3BlcnR5IGFuZCBmdW5jdGlvbiB0eXBlIGVudGl0eWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdEhlbGxvWyBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgXSA9IFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IGRzY3JiKCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICksIEhlbGxvICkuY29uZmlndXJhYmxlKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiB3cml0YWJsZSBtZXRob2Qgd2l0aCBzeW1ib2wgdHlwZSBwcm9wZXJ0eSBhbmQgZnVuY3Rpb24gdHlwZSBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgSGVsbG8gPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblx0XHRcdFx0XHRIZWxsb1sgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApIF0gPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBkc2NyYiggU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApLCBIZWxsbyApLndyaXRhYmxlKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkc2NyYiBlbnVtZXJhYmxlIG1ldGhvZCB3aXRoIHN5bWJvbCB0eXBlIHByb3BlcnR5IGFuZCBmdW5jdGlvbiB0eXBlIGVudGl0eWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgSGVsbG8gPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblx0XHRcdFx0XHRIZWxsb1sgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApIF0gPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBkc2NyYiggU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApLCBIZWxsbyApLmVudW1lcmFibGUoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map

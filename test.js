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

const assert = require( "should/as-function" );

//: @server:
const dscrb = require( "./dscrb.js" );
//: @end-server





//: @server:
describe( "dscrb", ( ) => {

	describe( "`dscrb( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should return an instance of Descriptor", ( ) => {
			let descriptor = dscrb( "property", { "property": "value" } );

			assert.equal( descriptor instanceof dscrb.Descriptor, true );
		} );
	} );

	describe( "`dscrb( 'property', { 'property': 'value' } ).describe( )`", ( ) => {
		it( "should return a descriptor object with complete descriptor properties", ( ) => {
			let descriptor = dscrb( "property", { "property": "value" } ).describe( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "value" in descriptor, true );

			assert.equal( "get" in descriptor, true );

			assert.equal( "set" in descriptor, true );

			assert.equal( "configurable" in descriptor, true );

			assert.equal( "enumerable" in descriptor, true );

			assert.equal( "writable" in descriptor, true );
		} );
	} );

	describe( "`dscrb( 'length', [ 1, 2, 3 ] ).describe( )`", ( ) => {
		it( "should return a descriptor object with complete descriptor properties", ( ) => {
			let descriptor = dscrb( "length", [ 1, 2, 3 ] ).describe( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "value" in descriptor, true );

			assert.equal( "get" in descriptor, true );

			assert.equal( "set" in descriptor, true );

			assert.equal( "configurable" in descriptor, true );

			assert.equal( "enumerable" in descriptor, true );

			assert.equal( "writable" in descriptor, true );
		} );
	} );

	describe( "`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).describe( )`", ( ) => {
		it( "should return a descriptor object with complete descriptor properties", ( ) => {
			let descriptor = dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).describe( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "value" in descriptor, true );

			assert.equal( "get" in descriptor, true );

			assert.equal( "set" in descriptor, true );

			assert.equal( "configurable" in descriptor, true );

			assert.equal( "enumerable" in descriptor, true );

			assert.equal( "writable" in descriptor, true );
		} );
	} );

	describe( "`dscrb( 'name', function yeah( ){ } ).describe( )`", ( ) => {
		it( "should return a descriptor object with complete descriptor properties", ( ) => {
			let descriptor = dscrb( "name", function yeah( ){ } ).describe( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "value" in descriptor, true );

			assert.equal( "get" in descriptor, true );

			assert.equal( "set" in descriptor, true );

			assert.equal( "configurable" in descriptor, true );

			assert.equal( "enumerable" in descriptor, true );

			assert.equal( "writable" in descriptor, true );
		} );
	} );

	describe( "`dscrb with symbol type property and function type entity`", ( ) => {
		it( "should return a descriptor object with complete descriptor properties", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
			let descriptor = dscrb( Symbol.for( "extensive" ), Hello ).describe( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "value" in descriptor, true );

			assert.equal( "get" in descriptor, true );

			assert.equal( "set" in descriptor, true );

			assert.equal( "configurable" in descriptor, true );

			assert.equal( "enumerable" in descriptor, true );

			assert.equal( "writable" in descriptor, true );

		} );
	} );

	describe( "`dscrb( 'property', { 'property': 'value' } ).configurable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( "property", { "property": "value" } ).configurable( ), true );
		} );
	} );

	describe( "`dscrb( 'property', { 'property': 'value' } ).writable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( "property", { "property": "value" } ).writable( ), true );
		} );
	} );

	describe( "`dscrb( 'property', { 'property': 'value' } ).enumerable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( "property", { "property": "value" } ).enumerable( ), true );
		} );
	} );

	describe( "`dscrb( 'length', [ 1, 2, 3 ] ).configurable( )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( dscrb( "length", [ 1, 2, 3 ] ).configurable( ), false );
		} );
	} );

	describe( "`dscrb( 'length', [ 1, 2, 3 ] ).writable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( "length", [ 1, 2, 3 ] ).writable( ), true );
		} );
	} );

	describe( "`dscrb( 'length', [ 1, 2, 3 ] ).enumerable( )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( dscrb( "length", [ 1, 2, 3 ] ).enumerable( ), false );
		} );
	} );

	describe( "`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).configurable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).configurable( ), true );
		} );
	} );

	describe( "`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).writable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).writable( ), true );
		} );
	} );

	describe( "`dscrb( Symbol.for( 'hello' ), { [ Symbol.for( 'hello' ) ]: 'test' } ).enumerable( )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( dscrb( Symbol.for( "hello" ), { [ Symbol.for( "hello" ) ]: "test" } ).enumerable( ), false );
		} );
	} );

	describe( "`dscrb( 'name', function yeah( ){ } ).configurable( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( dscrb( "name", function yeah( ){ } ).configurable( ), true );
		} );
	} );

	describe( "`dscrb( 'name', function yeah( ){ } ).writable( )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( dscrb( "name", function yeah( ){ } ).writable( ), false );
		} );
	} );

	describe( "`dscrb( 'name', function yeah( ){ } ).enumerable( )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( dscrb( "name", function yeah( ){ } ).enumerable( ), false );
		} );
	} );

	describe( "`dscrb configurable method with symbol type property and function type entity`", ( ) => {
		it( "should be equal to true", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
			let result = dscrb( Symbol.for( "extensive" ), Hello ).configurable( );

			assert.equal( result, true );

		} );
	} );

	describe( "`dscrb writable method with symbol type property and function type entity`", ( ) => {
		it( "should be equal to true", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
			let result = dscrb( Symbol.for( "extensive" ), Hello ).writable( );

			assert.equal( result, true );

		} );
	} );

	describe( "`dscrb enumerable method with symbol type property and function type entity`", ( ) => {
		it( "should be equal to false", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
			let result = dscrb( Symbol.for( "extensive" ), Hello ).enumerable( );

			assert.equal( result, false );

		} );
	} );

} );
//: @end-server





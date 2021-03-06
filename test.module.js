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
*/

const assert = require( "should" );

//: @server:
const dscrb = require( "./dscrb.js" );
//: @end-server

//: @client:
const dscrb = require( "./dscrb.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

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

} );
//: @end-server

//: @client:
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

} );
//: @end-client

//: @bridge:
describe( "dscrb", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`dscrb( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should return an instance of Descriptor", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return dscrb( "property", { "property": "value" } ) instanceof dscrb.Descriptor;
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`dscrb( 'property', { 'property': 'value' } ).describe( )`", ( ) => {
		it( "should return a descriptor object with complete descriptor properties", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( Object.keys( dscrb( "property", { "property": "value" } ).describe( ) ) );
				}

			).value;
			//: @end-ignore

			let descriptor = JSON.parse( result );

			assert.equal( descriptor.length, 6 );

			assert.equal( descriptor.indexOf( "value" ) > -1, true );

			assert.equal( descriptor.indexOf( "get" ) > -1, true );

			assert.equal( descriptor.indexOf( "set" ) > -1, true );

			assert.equal( descriptor.indexOf( "configurable" ) > -1, true );

			assert.equal( descriptor.indexOf( "enumerable" ) > -1, true );

			assert.equal( descriptor.indexOf( "writable" ) > -1, true );
		} );
	} );

} );
//: @end-bridge

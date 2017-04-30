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
			"protype": "protype"
		}
	@end-include
*/

const allkey = require( "allkey" );
const anykey = require( "anykey" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const kein = require( "kein" );
const protype = require( "protype" );

const PROPERTY = Symbol( "property" );
const ENTITY = Symbol( "entity" );
const DESCRIPTOR = Symbol( "descriptor" );
const TYPE = Symbol( "type" );

harden( "DATA_DESCRIPTOR", "data-descriptor" );
harden( "ACCESSOR_DESCRIPTOR", "accessor-descriptor" );

class Descriptor {
	constructor( property, entity ){
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

		if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
			throw new Error( "invalid property" );
		}

		if( falzy( entity ) ){
			throw new Error( "invalid entity" );
		}

		if( !kein( property, entity ) ){
			throw new Error( "property does not exists" );
		}

		this[ PROPERTY ] = property;
		this[ ENTITY ] = entity;

		this.describe( );
		this.determine( );
	}

	describe( ){
		this[ DESCRIPTOR ] = Object.getOwnPropertyDescriptor( this[ ENTITY ], this[ PROPERTY ] );

		return this;
	}

	determine( ){
		if( anykey( [ "get", "set" ], this[ DESCRIPTOR ] ) ){
			this[ TYPE ] = ACCESSOR_DESCRIPTOR;
		}

		if( allkey( [ "value", "writable" ], this[ DESCRIPTOR ] ) ){
			this[ TYPE ] = DATA_DESCRIPTOR;
		}

		return this;
	}

	resolve( ){
		if( this[ TYPE ] === ACCESSOR_DESCRIPTOR ){
			return {
				"get": this[ DESCRIPTOR ].get,
				"set": this[ DESCRIPTOR ].set,

				"configurable": this[ DESCRIPTOR ].configurable,
				"enumerable": this[ DESCRIPTOR ].enumerable
			};
		}

		if( this[ TYPE ] === DATA_DESCRIPTOR ){
			return {
				"value": this[ DESCRIPTOR ].value,
				"writable": this[ DESCRIPTOR ].writable,

				"configurable": this[ DESCRIPTOR ].configurable,
				"enumerable": this[ DESCRIPTOR ].enumerable
			};
		}

		return { };
	}

	get( ){
		if( this[ TYPE ] === DATA_DESCRIPTOR ){
			throw new Error( "cannot access get on data descriptor" );
		}

		return this[ DESCRIPTOR ].get.apply( this[ ENTITY ], raze( arguments ) );
	}

	set( ){
		if( this[ TYPE ] === DATA_DESCRIPTOR ){
			throw new Error( "cannot access set on data descriptor" );
		}

		return this[ DESCRIPTOR ].set.apply( this[ ENTITY ], raze( arguments ) );
	}

	value( ){
		if( this[ TYPE ] === ACCESSOR_DESCRIPTOR ){
			throw new Error( "cannot access value on accessor descriptor" );
		}

		return this[ DESCRIPTOR ].value;
	}

	writable( ){
		if( this[ TYPE ] === ACCESSOR_DESCRIPTOR ){
			throw new Error( "cannot access writable on accessor descriptor" );
		}

		return this[ DESCRIPTOR ].writable;
	}

	configurable( ){
		return this[ DESCRIPTOR ].configurable;
	}

	enumerable( ){
		return this[ DESCRIPTOR ].enumerable;
	}

	as( type ){
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

		return this[ TYPE ] === type;
	}

	flush( ){
		delete this[ ENTITY ];
		delete this[ PROPERTY ];

		return this;
	}

	toJSON( ){
		return this.resolve( );
	}

	valueOf( ){
		return this.resolve( );
	}

	toString( ){
		return JSON.stringify( this.toJSON( ) );
	}
}

module.exports = Descriptor;

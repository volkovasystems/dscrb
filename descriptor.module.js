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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
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
*/

const allkey = require( "allkey" );
const anykey = require( "anykey" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const kein = require( "kein" );
const protype = require( "protype" );
const wichevr = require( "wichevr" );

const PROPERTY = Symbol( "property" );
const ENTITY = Symbol( "entity" );
const DESCRIPTOR = Symbol( "descriptor" );
const TYPE = Symbol( "type" );

const DATA_DESCRIPTOR = "data-descriptor";
const ACCESSOR_DESCRIPTOR = "accessor-descriptor";

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
		let value = this[ ENTITY ][ this[ PROPERTY ] ];
		let enumerable = typeof this[ PROPERTY ] != "symbol";

		this.setDescriptor( detr( this.extractDescriptor( ), {
			"value": value,
			"writable": true,

			"configurable": true,
			"enumerable": enumerable
		} ) );

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

	get( ){
		if( this.isDataDescriptor( ) ){
			return this[ DESCRIPTOR ].value;
		}

		return this[ DESCRIPTOR ].get.apply( this[ ENTITY ], raze( arguments ) );
	}

	set( value ){
		if( this.isDataDescriptor( ) ){
			this[ DESCRIPTOR ].value = value;

		}else{
			this[ DESCRIPTOR ].set.apply( this[ ENTITY ], raze( arguments ) );
		}

		return this;
	}

	value( ){
		if( this.isAccessorDescriptor( ) ){
			throw new Error( "cannot access value on accessor descriptor" );
		}

		return this[ DESCRIPTOR ].value;
	}

	writable( ){
		if( this.isAccessorDescriptor( ) ){
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

	isAccessorDescriptor( ){
		return this[ TYPE ] === ACCESSOR_DESCRIPTOR;
	}

	isDataDescriptor( ){
		return this[ TYPE ] === DATA_DESCRIPTOR;
	}

	resolveDescriptor( ){
		let descriptor = {
			"configurable": this[ DESCRIPTOR ].configurable,
			"enumerable": this[ DESCRIPTOR ].enumerable
		};

		if( this.isAccessorDescriptor( ) ){
			descriptor.get = this[ DESCRIPTOR ].get;
			descriptor.set = this[ DESCRIPTOR ].set;
		}

		if( this.isDataDescriptor( ) ){
			descriptor.value = this[ DESCRIPTOR ].value;
			descriptor.writable = this[ DESCRIPTOR ].writable;
		}

		return descriptor;
	}

	extractDescriptor( ){
		return Object.getOwnPropertyDescriptor( this[ ENTITY ], this[ PROPERTY ] );
	}

	getDescriptor( ){
		return this[ DESCRIPTOR ];
	}

	applyDescriptor( ){
		Object.defineProperty( this[ ENTITY ], this[ PROPERTY ], this[ DESCRIPTOR ] );

		return this;
	}

	setDescriptor( descriptor ){
		if( typeof descriptor == "object" ){
			this[ DESCRIPTOR ] = descriptor;
		}

		return this;
	}

	toJSON( ){
		return this.resolveDescriptor( );
	}

	valueOf( ){
		return this.resolveDescriptor( );
	}

	toString( ){
		return JSON.stringify( this.toJSON( ) );
	}
}

module.exports = Descriptor;

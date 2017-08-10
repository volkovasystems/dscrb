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
			"detr": "detr",
			"falzy": "falzy",
			"kein": "kein",
			"raze": "raze"
		}
	@end-include
*/

const allkey = require( "allkey" );
const anykey = require( "anykey" );
const detr = require( "detr" );
const falzy = require( "falzy" );
const kein = require( "kein" );
const raze = require( "raze" );

const DESCRIPTOR = Symbol( "descriptor" );
const ENTITY = Symbol( "entity" );
const PROPERTY = Symbol( "property" );
const TYPE = Symbol( "type" );

const ACCESSOR_DESCRIPTOR = "accessor-descriptor";
const DATA_DESCRIPTOR = "data-descriptor";

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

		if(
			falzy( property )
			|| ( typeof property != "number" && typeof property != "string" && typeof property != "symbol" )
		){
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

		this.setDescriptor( detr( this.extractDescriptor( ), function defer( descriptor ){
			if( anykey( [ "get", "set" ], descriptor ) ){
				return {
					"get": descriptor.get,
					"set": descriptor.set,

					"configurable": true,
					"enumerable": enumerable
				};

			}else{
				return {
					"value": descriptor.value,
					"writable": true,

					"configurable": true,
					"enumerable": enumerable
				};
			}
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
			return this.get( );
		}

		return this[ DESCRIPTOR ].value;
	}

	writable( ){
		if( this.isAccessorDescriptor( ) ){
			return false;
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
			descriptor.get = this[ DESCRIPTOR ].get || ( function get( ){
				return this.value;
			} ).bind( this[ DESCRIPTOR ] );

			descriptor.set = this[ DESCRIPTOR ].set || ( function set( value ){
				this.value = value;

				return this;
			} ).bind( this[ DESCRIPTOR ] );
		}

		if( this.isDataDescriptor( ) ){
			descriptor.value = this[ DESCRIPTOR ].value;
			descriptor.writable = this[ DESCRIPTOR ].writable;
		}

		return Object.freeze( descriptor );
	}

	extractDescriptor( ){
		try{
			return Object.getOwnPropertyDescriptor( this[ ENTITY ], this[ PROPERTY ] );

		}catch( error ){
			return { };
		}
	}

	applyDescriptor( ){
		/*;
			@note:
				There's no sense to apply descriptor to falsy, non-object or non-function entity.
			@end-note
		*/
		if(
			typeof this[ ENTITY ] != "object"
			&& typeof this[ ENTITY ] != "function"
		){
			return this;
		}

		try{
			Object.defineProperty( this[ ENTITY ], this[ PROPERTY ], this.resolveDescriptor( ) );

		}catch( error ){
			throw new Error( `cannot apply descriptor, ${ error.stack }` );
		}

		return this;
	}

	getDescriptor( ){
		return this.resolveDescriptor( );
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

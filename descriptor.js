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

		This class will be used to augment the descriptor structure.
		This will be used to just get values from the descriptor.

		This will make the data and accessor descriptor as one.
	@end-submodule-documentation

	@include:
		{
			"falzy": "falzy",
			"kein": "kein"
		}
	@end-include
*/

const falzy = require( "falzy" );
const kein = require( "kein" );

const DESCRIPTOR = Symbol( "descriptor" );
const ENTITY = Symbol( "entity" );
const PROPERTY = Symbol( "property" );
const TYPE = Symbol( "type" );

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
			|| (
				typeof property != "number"
				&& typeof property != "string"
				&& typeof property != "symbol"
			)
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
	}

	describe( ){
		if( this[ DESCRIPTOR ] ){
			return this[ DESCRIPTOR ];
		}

		let descriptor = { };
		try{
			descriptor = Object.getOwnPropertyDescriptor( this[ ENTITY ], this[ PROPERTY ] );

		}catch( error ){ }

		let value = this[ ENTITY ][ this[ PROPERTY ] ];
		if( typeof value == "undefined" ){
			value = descriptor.value;
		}

		if(
			typeof value == "undefined"
			&& typeof descriptor.get == "function"
		){
			value = descriptor.get( );
		}

		let self = this;
		let privateProperty = Symbol( `-${ this[ PROPERTY ] }` );

		let get = descriptor.get;
		if( typeof get != "function" ){
			get = function get( ){
				return self[ ENTITY ][ privateProperty ];
			}
		}

		let set = descriptor.set;
		if( typeof set != "function" ){
			set = function set( value ){
				self[ ENTITY ][ privateProperty ] = value;

				return self[ ENTITY ];
			};
		}

		/*;
			@note:
				All property values are configurable unless stated and/or
					the entity is not frozen or sealed.
			@end-note
		*/
		let configurable = descriptor.configurable;
		if( typeof configurable != "boolean" ){
			configurable = !Object.isFrozen( this[ ENTITY ] ) && !Object.isSealed( this[ ENTITY ] );
		}

		/*;
			@note:
				All property values are enumerable by default unless,
					the property is stated as false or the property is a symbol.
			@end-note
		*/
		let enumerable = descriptor.enumerable;
		if( typeof this[ PROPERTY ] == "symbol" ){
			enumerable = false;
		}

		if( typeof enumerable != "boolean" ){
			enumerable = true;
		}

		/*;
			@note:
				If the writable property does not exist, it is false by default
					which means the descriptor is an accessor descriptor
					and you cannot simply assign a value without calling
					the setter method which implies that it is not writable
					in a sense that writability semantics requires direct
					value assignment.
			@end-note
		*/
		let writable = descriptor.writable;
		if( typeof writable != "boolean" ){
			writable = false;
		}

		this[ DESCRIPTOR ] = Object.freeze( {
			"value": value,

			"get": get,
			"set": set,

			"configurable": configurable,
			"enumerable": enumerable,
			"writable": writable
		} );

		return this[ DESCRIPTOR ];
	}

	get( ){
		return this[ DESCRIPTOR ].get;
	}

	set( ){
		return this[ DESCRIPTOR ].set;
	}

	value( ){
		return this[ DESCRIPTOR ].value;
	}

	writable( ){
		return this[ DESCRIPTOR ].writable;
	}

	configurable( ){
		return this[ DESCRIPTOR ].configurable;
	}

	enumerable( ){
		return this[ DESCRIPTOR ].enumerable;
	}

	get descriptor( ){
		try{
			return Object.freeze( Object.getOwnPropertyDescriptor( this[ ENTITY ], this[ PROPERTY ] ) );

		}catch( error ){
			return Object.freeze( { } );
		}
	}
}

module.exports = Descriptor;

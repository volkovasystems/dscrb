/*;
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

const harden = require( "harden" );
const zelf = require( "zelf" );

//: @server:
const Descriptor = require( "./descriptor.js" );
//: @end-server



const dscrb = function dscrb( property, entity ){
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

	if( arguments.length == 1 ){
		entity = zelf( this );
	}

	return Object.freeze( new Descriptor( property, entity ) );
};

harden( "Descriptor", Descriptor, dscrb );

module.exports = dscrb;

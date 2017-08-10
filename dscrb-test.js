
const assert = require( "assert" );
const dscrb = require( "./dscrb.js" );
const Descriptor = require( "./descriptor.js" );

let test = { "property": "value" };
let descriptor = dscrb( "property", test );

assert.equal( descriptor instanceof Descriptor, true, "should be equal to true" );

assert.equal( descriptor.as( DATA_DESCRIPTOR ), true, "should be equal to true" );

assert.deepEqual( descriptor.toJSON( ),
	{
		"value": "value",
		"enumerable": true,
		"configurable": true,
		"writable": true
	},
	"should be equal to { 'value': 'value', 'enumerable': true, 'configurable': true, 'writable': true }" );

console.log( "ok" );

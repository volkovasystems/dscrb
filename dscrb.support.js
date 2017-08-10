"use strict";

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
              			"path": "dscrb/dscrb.js",
              			"file": "dscrb.js",
              			"module": "dscrb",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/dscrb.git",
              			"test": "dscrb-test.js",
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
              			"falzy": "falzy",
              			"kein": "kein",
              			"protype": "protype",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var zelf = require("zelf");

var Descriptor = require("./descriptor.js");

var dscrb = function dscrb(property, entity) {
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

	if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid property");
	}

	if (arguments.length == 1) {
		entity = zelf(this);
	}

	if (!kein(property, entity)) {
		throw new Error("property does not exists");
	}

	return new Descriptor(property, entity);
};

module.exports = dscrb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzY3JiLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwia2VpbiIsInByb3R5cGUiLCJ6ZWxmIiwiRGVzY3JpcHRvciIsImRzY3JiIiwicHJvcGVydHkiLCJlbnRpdHkiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1JLGFBQWFKLFFBQVMsaUJBQVQsQ0FBbkI7O0FBRUEsSUFBTUssUUFBUSxTQUFTQSxLQUFULENBQWdCQyxRQUFoQixFQUEwQkMsTUFBMUIsRUFBa0M7QUFDL0M7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJUixNQUFPTyxRQUFQLEtBQXFCLENBQUNKLFFBQVNJLFFBQVQsRUFBbUJFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQXJDLENBQTFCLEVBQXlFO0FBQ3hFLFFBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxVQUFVQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCTixXQUFTSixLQUFNLElBQU4sQ0FBVDtBQUNBOztBQUVELEtBQUksQ0FBQ0YsS0FBTUssUUFBTixFQUFnQkMsTUFBaEIsQ0FBTCxFQUErQjtBQUM5QixRQUFNLElBQUlJLEtBQUosQ0FBVywwQkFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBTyxJQUFJUCxVQUFKLENBQWdCRSxRQUFoQixFQUEwQkMsTUFBMUIsQ0FBUDtBQUNBLENBM0JEOztBQTZCQU8sT0FBT0MsT0FBUCxHQUFpQlYsS0FBakIiLCJmaWxlIjoiZHNjcmIuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkc2NyYlwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJkc2NyYi9kc2NyYi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJkc2NyYi5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRzY3JiXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZHNjcmIuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImRzY3JiLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0R2V0IHByb3BlcnR5IGRlc2NyaXB0b3IuXHJcblxyXG5cdFx0Tm90ZSB0aGF0IHlvdSBzaG91bGQgb25seSB1c2UgdGhpcyBpZiB0aGUgcHJvcGVydHkgZXhpc3RzIG9uIHRoZSBlbnRpdHkuXHJcblx0XHRUaGlzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgcHJvcGVydHkgZG9lcyBub3QgZXhpc3RzLlxyXG5cclxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGluc3RhbmNlIG9mIHRoZSBEZXNjcmlwdG9yIGNsYXNzLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgRGVzY3JpcHRvciA9IHJlcXVpcmUoIFwiLi9kZXNjcmlwdG9yLmpzXCIgKTtcclxuXHJcbmNvbnN0IGRzY3JiID0gZnVuY3Rpb24gZHNjcmIoIHByb3BlcnR5LCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcInN5bWJvbFwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImVudGl0eVwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAxICl7XHJcblx0XHRlbnRpdHkgPSB6ZWxmKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHRpZiggIWtlaW4oIHByb3BlcnR5LCBlbnRpdHkgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcInByb3BlcnR5IGRvZXMgbm90IGV4aXN0c1wiICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3IERlc2NyaXB0b3IoIHByb3BlcnR5LCBlbnRpdHkgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZHNjcmI7XHJcbiJdfQ==
//# sourceMappingURL=dscrb.support.js.map

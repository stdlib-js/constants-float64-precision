/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Effective number of bits in the significand of a double-precision floating-point number.
*
* @module @stdlib/constants-float64-precision
* @type {integer32}
*
* @example
* var FLOAT64_PRECISION = require( '@stdlib/constants-float64-precision' );
* // returns 53
*/


// MAIN //

/**
* The effective number of bits in the significand of a double-precision floating-point number is `52` significand bits plus `1` hidden bit.
*
* @constant
* @type {integer32}
* @default 53
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_PRECISION = 53|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_PRECISION;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var tape = require( 'tape' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Float64Array = require( '@stdlib/array-float64' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var cuany = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cuany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function cumulatively tests whether at least one element is truthy (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ false, false, true, false, false ];
	actual = cuany( x );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	actual = cuany( x );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ true, true, true, true, true ];
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ null, {}, null ];
	actual = cuany( x );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ true, false, false, false, false ];
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element is truthy (typed)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 1.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element is truthy (complex128)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 1.0, 1.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element is truthy (complex64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 0.0, 1.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element of an accessor array is truthy (accessor)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ false, false, true, false, false ] );

	actual = cuany( x );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ false, false, false, false, false ] );
	actual = cuany( x );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ true, true, true, true, true ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ false, true, false ] );
	actual = cuany( x );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ true, false, false, false, false ] );
	actual = cuany( x );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
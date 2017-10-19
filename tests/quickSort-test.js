const chai = require('chai');
const assert = chai.assert;
// var assert = require('chai').assert;
// import { assert } from 'chai';

const quickSort = require('../scripts/quickSort.js');
const randomArray = require('../tests/largeArray.js');



describe('Quick Sort', function () {

	it('should be a function', () => {
		assert.isFunction(quickSort)
	});

	it('should sort a small array of numbers', () => {
    	const numbers = [4, 3, 2, 1];
		assert.deepEqual(quickSort(numbers), [1, 2, 3, 4] );
  	});

  	it('should be able to sort letters alphabetically', () => {
  		const letters = ['c', 'e', 'a', 'd', 'l', 'm'];
  		assert.deepEqual(quickSort(letters), ['a', 'c', 'd', 'e', 'l', 'm'] );
  	})

  	it('should sort a small array of numbers that includes negative numbers', () => {
    	const numbers = [4, 3, -2, 2, 1, -5];
		assert.deepEqual(quickSort(numbers), [-5, -2, 1, 2, 3, 4] );
  	});

  	it ('should sort an array of 10,000 numbers', () =>{
  		const largeArray = randomArray(1, 10000, 10000)
  		assert.deepEqual(quickSort(largeArray), largeArray.sort((a,b) => a-b));
  	});

  	it ('should sort an array of 19,000 numbers', () =>{
  		const largeArray = randomArray(1, 19000, 19000)
  		assert.deepEqual(quickSort(largeArray), largeArray.sort((a,b) => a-b));
  	});

  	it ('should sort an array of 100,000 numbers', () =>{
  		const largeArray = randomArray(1, 100000, 100000)
  		assert.deepEqual(quickSort(largeArray), largeArray.sort((a,b) => a-b))
  	});

  	it ('should sort an array of 400,000 numbers', () =>{
  		const largeArray = randomArray(1, 400000, 400000)
  		assert.deepEqual(quickSort(largeArray), largeArray.sort((a,b) => a-b))
  	});

  });
const chai = require('chai');
const assert = chai.assert;
// var assert = require('chai').assert;
// import { assert } from 'chai';

const insertionSort = require('../scripts/insertionSort.js');
const randomArray = require('../tests/largeArray.js');


describe('Insertion Sort', function () {

	it('insertionSort should be a function', () => {
		assert.isFunction(insertionSort)
	});

	it('should sort a small array of numbers', () => {
    	const numbers = [4, 3, 2, 1];
		assert.deepEqual(insertionSort(numbers), [1, 2, 3, 4] );
  	});

  	it('should be able to sort letters alphabetically', () => {
  		const letters = ['c', 'e', 'a', 'd', 'l', 'm'];
  		assert.deepEqual(insertionSort(letters), ['a', 'c', 'd', 'e', 'l', 'm'] );
  	});

  	it('should sort a small array of numbers that includes negative numbers', () => {
    	const numbers = [4, 3, -2, 2, 1, -5];
		assert.deepEqual(insertionSort(numbers), [-5, -2, 1, 2, 3, 4] );
  	});

  	it ('should sort an array of 10,000 numbers', () =>{
  		const largeArray = randomArray(1, 9, 10000)
  		assert.deepEqual(insertionSort(largeArray), largeArray.sort())
  	});


  	it ('should sort an array of 19,000 numbers', () =>{
  		const largeArray = randomArray(1, 9, 19000)
  		assert.deepEqual(insertionSort(largeArray), largeArray.sort())
  	});

})

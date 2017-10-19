// var assert = require('chai').assert;



const chai = require('chai');
const assert = chai.assert;

const bubbleSort = require('../scripts/bubbleSort.js');
const randomArray = require('../tests/largeArray.js');


describe('Bubble Sort', function () {

	it('should be a function', () => {
		assert.isFunction(bubbleSort)
	});

  	it('should sort a small array of numbers with bubbleSort', () => {
    	const numbers = [4, 3, 2, 1];
		assert.deepEqual(bubbleSort(numbers), [1, 2, 3, 4] );
  	});

  	it('should be able to sort letters alphabetically', () => {
  		const letters = ['c', 'e', 'a', 'd', 'l', 'm'];
  		assert.deepEqual(bubbleSort(letters), ['a', 'c', 'd', 'e', 'l', 'm'] );
  	})

  	it('should sort a small array of numbers that includes negative numbers', () => {
    	const numbers = [4, 3, -2, 2, 1, -5];
		assert.deepEqual(bubbleSort(numbers), [-5, -2, 1, 2, 3, 4] );
  	});  

    it ('should sort an array of 10,000 numbers', () =>{
      const largeArray = randomArray(1, 9, 10000)
      assert.deepEqual(bubbleSort(largeArray), largeArray.sort())
    });	

  });


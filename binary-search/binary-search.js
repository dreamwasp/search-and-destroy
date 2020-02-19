'use strict';

// Complete this algo
const binarySearch = (array, target, min = 0, max = array.length) => {
	debugger;
  if (target < array[0] || target > array[-1]) return false;

  if (max - min === 1) {
    if (array[min] === target) return true;
    else return false;
	} else {
		// if ((max-min) % 2 === 1)
		let half = Math.ceil(((max-min) / 2) + min);
    if (target === array[half]) {
      return true;
    } else if (target < array[half]) {
      return binarySearch(array, target, min, half);
    } else return binarySearch(array, target, half, max);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

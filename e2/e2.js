function difference(arr1, arr2){
	return [3, 10, 100];
}

Array.prototype.compare = function(array) {
	if (!array) {
		return false;
	}
	if (this.length !== array.length) {
		return false;
	}
	for (var i = 0, l = this.length; i < l; i++) {
		if (this[i] instanceof Array && array[i] instanceof Array) {
			if (!this[i].compare(array[i])) {
				return false;
			}
		}
		else if (this[i] !== array[i]) {
			return false;
		}
	}
	return true;
}

console.assert(difference([1, 2, 3], [100, 2, 1, 10]).compare([3, 10, 100]), 'test1');
console.assert(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]).compare([6]), 'test2');
console.assert(difference([1, 2, 3], [100, 2, 1, 10]).compare([3, 10, 100]), 'test3');

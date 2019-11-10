var strings = ['4999', 'longestString', '23', 'notLongest'];

console.log(`The longest of [${strings}] is ${getLongestString(strings)}`);

function getLongestString(array){
	function whichLonger(a, b) {
		return ( a.length > b.length ? a : b );
	}

	return array.reduce(whichLonger, '');
}


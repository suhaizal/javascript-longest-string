var strings = ['4999', 'longestString', '23', 'notLongest'];

console.log(`The longest of [${strings}] is ${getLongestString(strings)}`);

function getLongestString(array){
	var longestString = array[0];
	for ( i = 1; i < array.length; i++ ) {
		if ( array[i].length > longestString.length ) {
			longestString = array[i];
		}
	}
	return longestString;
}


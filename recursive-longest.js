var strings = ['4999', 'longestString', '23', 'notLongest'];

console.log(`The longest of [${strings}] is ${getLongestString(strings)}`);

function getLongestString(array){
	function whichLonger(a, b) {
		if ( a.length > b.length) 
			return a;
		else
			return b;
	}

	function head(anArray) {
		return anArray.slice(0,1)[0];
	}

	function tail(anArray) {
		return anArray.slice(1);
	}

	function theLongest(longest, inArray) {
		if (inArray.length === 0)
			return longest;
		else 
			return theLongest(whichLonger(longest,head(inArray)),
				tail(inArray));
	}

	return theLongest('', array);
}


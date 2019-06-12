function longestPrefix(str){
	var prefix = new Array(str.length);
	var maxPrefix = 0;
	prefix[0] = 0;
	for(var i = 1; i < str.length; i++){
		while(str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0){
			maxPrefix = prefix[maxPrefix - 1];
		}
		if(str.charAt(maxPrefix) === str.charAt(i)){
			maxPrefix++;
		}
		prefix[i] = maxPrefix;
	}
	return prefix;
}

function KnuthMorrisPratt(str, compare){
	var start = System.currentTimeMillis();
	var prefixTable = longestPrefix(compare),
		compareIdx = 0,
		strIdx = 0;
	while(strIdx < str.length){
		if(str.charAt(strIdx) != compare.charAt(compareIdx)){
			if(compareIdx != 0) compareIdx = prefixTable[compareIdx - 1];
			else strIdx++;
		}else if(str.charAt(strIdx) == compare.charAt(compareIdx)){
			strIdx++;
			compareIdx++;
		}
		var end = System.currentTimeMillis();
		console.log(end-start);
		if(compareIdx == compare.length) return true;
	}
	var end = System.currentTimeMillis();
	console.log(end-start);
	return false;

}

KnuthMorrisPratt('curious', 'jeager');
KnuthMorrisPratt('curious', 'curi');
KnuthMorrisPratt('curious', 'curs');
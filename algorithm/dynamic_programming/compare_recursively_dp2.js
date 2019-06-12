function countingWays(n){
	if(n < 0) return 0;
	if(n == 0) return 1;
	return countingWays(n - 1) + countingWays(n - 2) + countingWays(n - 3); 
}

countingWays(12);

function countingWaysDP(n){
	var cache = {};
	if(n < 0) return 0;
	if(n == 0) return 1;
	if(cache[n]){
		return cache[n];
	}else{
		cache[n] = countingWaysDP(n - 1) + countingWaysDP(n - 2) + countingWaysDP(n - 3);
		return cache[n];
	}
}

countingWaysDP(12);


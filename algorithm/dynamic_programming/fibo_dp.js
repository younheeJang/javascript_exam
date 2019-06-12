var cache = {};
function fiboDP(n){
	//피보나치 계산의 예외가 되는 숫자의 범위를 빼준다
	if(n <= 1) return n;
	if(cache[n]) return cache[n];
	return (cache[n] = fiboDP(n - 1) + fiboDP(n - 2)); 
}


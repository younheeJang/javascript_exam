function primeFactorizing(n){
	//여기서 짝수 다 거르고
	while(n%2 == 0){
		console.log(2);
		n = n/2;
	}
	//여기서 홀수처리한다.
	for(var i = 3; i*i <= n; i = i+2){
		while(n%i ==0){
			console.log(i)
			n = n/i;
		}
	}
	if(n > 2){
		console.log(n);
	}
}
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
//primeFactorizing(10)
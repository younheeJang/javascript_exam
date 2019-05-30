function modInverse(e, phi){
	var m0 = phi, t, q;
	var x0 = 0, x1 = 1;

	if(phi == 1){
		return 0;
	}

	while(e > 1){
		q = Math.floor(e / phi);
		t = phi;
		phi = e % phi, e = t;
		t = x0;
		x0 = x1 - q * x0;
		x1 = t;
	}
	if(x1 < 0){
		x1 += m0;
	}
	return x1;
}
//modInverse(7, 40)
function RSAKeyPair(p, q){
	if(!(isPrime(p) && isPrime(q)))
	return;

	if(p==q){
		return;
	}

	var n = p * q,
		phi = (p-1)*(q-1),
		e = 3,
		d = modInverse(e, phi);
	return [[e,n],[d,n]]
}
//RSAKeyPair(5,11)

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

//https://ko.wikipedia.org/wiki/RSA_%EC%95%94%ED%98%B8
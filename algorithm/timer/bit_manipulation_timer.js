//just 사칙연산.
let sumNaive = (a, b) => {
	return a + b;
}

//using bit operator 
let sumBit = (a, b) => {
	while(b != 0){
		let carry = (a & b);
		a = a ^ b;
		b = carry << 1;
	}
	return a;
}

//function timer
let selector1 = "sumNaive";
console.time(selector1);
sumNaive(1,1);
console.timeEnd(selector1); 

let selector2 = "sumBit";
console.time(selector2);
sumBit(1,1);
console.timeEnd(selector2); 


//get negative 
let negateBit = (a) => sumBit(~a, 1); 

console.log(negateBit(5)) // return -5;
console.log(negateBit(negateBit(5))); // return 5;


//get substract result using subsequent concept functions:
let substractBit = (a, b) => sumBit(a, negateBit(b));

console.log(substractBit(9,1));


//get multiplication: with of course, handling negarive numbers
let multiplyBit = (a, b) => {
	let m = 1,
		c = 0;
	if(a < 0){
		a = negateBit(a);
		b = negateBit(b);
	}
	while(a >= m && b){
		if(a & m){
			c = sumBit(b, c);
		}
		b = b << 1;
		m = m << 1;
	}
	return c;
}

console.log(multiplyBit(3,9));

//나누기는, 사칙연산에서 흔히 쓰는 /요 개념, 이 아니라
//비트 연산자를 활용할 땐, 빼기 개념을 활용해 나눈다. 
//10/5 = 2           10-5-5 = 0의 개념.
let divideBit = (a, b) => {
	let c = 0;
	if(b != 0){
		while(a >= b){
			a = substractBit(a, b);
			c++;
		}
	}
	return c;
}

console.log(divideBit(10, 2));
//console.log(divideBit(-10, 2)); => return 0;

let includeNegateDivideBit = (a, b) => {
	var c = 0,
		isNegative = 0;
	if(a < 0) {
		a = negateBit(a);
		isNegative = !isNegative;
	}
	if(b < 0){
		b = negateBit(b);
		isNegative = !isNegative;
	}
	if(b != 0){
		while(a >= b){
			a = substractBit(a, b);
			c++;
		}
	}
	if(isNegative){
		c = negateBit(c);
	}
	return c;
}




var  DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

//숫자를 받는다
function encoding(num){
	var base = DICTIONARY.length;
	var result = '';
	if(num === 0){
		return DICTIONARY[0];
	}
	while(num > 0){
		result += DICTIONARY[(num % base)];
		num = Math.floor(num / base);
	}
	return reversing(result);
}

//끝에서부터 끄집어낸다.
function reversing(str){
	var result = '';
	for(var i = str.length - 1; i >= 0; i--){
		result += str.charAt(i);
	}
	return result;
}

//
function decoding(identification){
	var base = DICTIONARY.length;
	var result = 0;
	for(var i = 0; i < identification.split('').length; i++){
		result = result * base + DICTIONARY.indexOf(identification.charAt(i));
	}
	return result;
}
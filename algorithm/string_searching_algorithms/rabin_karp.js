function RabinKarpSearch(){
	this.prime = 101;
}
RabinKarpSearch.prototype.getHash = function(str, endLeng) {
	if(endLeng == null) endLeng = str.length;
	var hashInt = 0;
	for(var i = 0; i < endLeng; i++){
		hashInt += str.charCodeAt(i) * Math.pow(this.prime, i);
	}
	return hashInt;
}  

var rks = new RabinKarpSearch();
rks.getHash("curious");
rks.getHash("jeager");

RabinKarpSearch.prototype.reHashing = function (str, prevIdx, newIdx, prevHash, patternLeng){
	if(patternLeng == null) patternLeng = str.length;
	var newHash = prevHash - str.charCodeAt(prevIdx);
	newHash = Math.floor(newHash/this.prime);
	newHash += str.charCodeAt(newIdx) * Math.pow(this.prime, patternLeng - 1);
	return newHash;
}

RabinKarpSearch.prototype.strEquals = function(str1, startIdx1, endIdx1, str2, startIdx2, endIdx2){
	if(endIdx1 - startIdx1 != endIdx2 - startIdx2){
		return false;
	}
	while(startIdx1 <- endIdx1 && startIdx2 <= endIdx2){
		if(str1[startIdx1] != str2[startIdx2]){
			return false;
		}
		startIdx1++;
		startIdx2++;
	}
	return true;
}

//메인 함수는 스트링의 마지막에 도달할 때까지 혹은 패턴을 찾을 때까지 해시를 재계산해내는 방식으로 작동하게 된다. 
RabinKarpSearch.prototype.rabinkarpSearch = function(str, pattern){
	var T = str.length,
		W = pattern.length,
		patternHash = this.getHash(pattern, W),
		textHash = this.getHash(str, W);
	for(var i = 1; i <= T - W + 1; i++){
		if(patternHash == textHash && this.strEquals(str, i - 1, i + W - 2, pattern, 0, W - 1)){
			return i - 1;
		}
		if( i < T - W + 1){
			textHash = this.reHashing(str, i - 1, i + W - 1, textHash, W);
		}
	}
	return -1;
}
var rks = new RabinKarpSearch();
console.log( rks.rabinkarpSearch("curious", "o"));
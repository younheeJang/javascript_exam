function boyerMooreHelper(str){
	var Obj = {},
		leng = str.length;
	for(var i=0; i < leng - 1; i++){
		Obj[str[i]] = leng - 1 - i;
	}
	if(Obj[str[leng - 1]] == undefined){
		Obj[str[leng - 1]] = leng;
	}
	return Obj;
}

function boyerMooreSearch(str, compareStr){
	var resultHelper = boyerMooreHelper(compareStr),
		offset = 0,
		compareLastIdx = compareStr.length - 1,
		scanIdx = compareLastIdx,
		maxOffset = str.length - compareStr.length;
	
	while(offset <= maxOffset){
		scanIdx = 0;
		while(compareStr[scanIdx] == str[scanIdx + offset]){
			if(scanIdx == compareLastIdx) {
				return offset;
			}
			scanIdx++;
		}
		var matchStr = str[offset + compareLastIdx];
		if(resultHelper[matchStr]){
			offset += resultHelper[matchStr];
		}else{
			offset += 1;
		}
	}
	return -1;
}

console.log(boyerMooreSearch('curious', 'ous'));
// str1 과 str2가, 같으면 아무것도 하지 않는다. 
//둘이 다르면, 재귀 호출을 한다. 
function levenshteinDistance(str1, str2, str1Leng, str2Leng){
	if(str1Leng == 0) return str2Leng;
	if(str2Leng == 0) return str1Leng;

	if(str1[str1Leng - 1] == str2[str2Leng - 1]){
		return levenshteinDistance(str1, str2, str1Leng - 1, str2Leng - 1);
	}

	return 1 + Math.min(
		levenshteinDistance(str1, str2, str1Leng, str2Leng - 1),
		levenshteinDistance(str1, str2, str1Leng - 1, str2Leng),
		levenshteinDistance(str1, str2, str1Leng - 1, str2Leng - 1)
	);
}

function levenshteinDistanceWrapper(str1, str2){
	return levenshteinDistance(str1, str2, str1.length, str2.length);
}

//str1을 str2와 똑같이 만들기 위해서는, 몇 번이 바뀌어야 하는지. counting한다.
//levenshteinDistanceWrapper("ytry", "try"); => return 1 한번만 바뀌면 똑같아진다.
//levenshteinDistanceWrapper("ry", "try"); => return 1 하번만 바뀌면 똑같아진다. 
//가장 비효율적인 워스트 케이스는 두 스트링이 하나도 안 맞을 때. 
// time complexity : O(3m)







//이제 DP:
function levenshteinDistanceDP(str1, str2, str1leng, str2leng){
	//매트릭스 초기화
	var matrix = [];
	for(var i = 0; i < str1leng + 1; i++){
		matrix[i] = [];
		for(var j = 0; j < str2leng + 1; j++){
			matrix[i][j] = undefined;
		}
	}

	for(var i = 0; i < str1leng + 1; i++){
		for(var j = 0; j < str2leng + 1; j++){
			if(i == 0){
				matrix[i][j] = j;
			}else if(j == 0){
				matrix[i][j] = i;
			}else if(str1[i - 1] == str2[j - 1]){
				//만약 둘이 같으면, 그 다음 칸에는 수를 증가시키지 않아도 된다. 
				matrix[i][j] = matrix[i - 1][j - 1];
			}else {
				//만약 위의 세 경우 모두, 해당되지 않는다면, 
				var insert = matrix[i][j-1],
					remove = matrix[i-1][j],
					replace = matrix[i-1][j-1];
					matrix[i][j] = 1 + Math.min(insert, remove, replace);
			}
		}
	}
	return matrix[str1leng][str2leng];
}

function levenshteinDistanceDPWrapper(str1, str2){
	return levenshteinDistanceDP(str1, str2, str1.length, str2.length);
}

console.log(levenshteinDistanceDPWrapper("ytry", "try"));

//래퍼 함수를 통해 인자로 받은 두 개의 문자열 패러미터를 통해 호출되는 본격함수. 이 함수의 메인 기능은, 인자로 받은 두 개의 문자열에서, 일치하는 캐릭터가 몇 개인지 찾아내는 것. 
//이 알고리즘의 공식:
//만약 두 스트링의 마지막 캐릭터가 같다면, return 1 + LongestCommonSebsequenceNaive(str1, str2, str1leng - 1, str2leng - 1)
//그러나 이 요건을 충족하지 않는다면, return Math.max(LongestCommonSebsequenceNaive(str1, str2, str1leng, str2leng - 1),
//LongestCommonSebsequenceNaive(str1, str2, str1leng, str2leng))
//이런식.

//use recursive conception
function LongestCommonSebsequenceNaive(str1, str2, str1leng, str2leng){
	if(str1leng == 0 || str2leng == 0){
		return 0;
	}
	if(str1[str1leng - 1] == str2[str2leng - 1]){
		return 1 + LongestCommonSebsequenceNaive(str1, str2, str1leng - 1, str2leng - 1);
	}else {
		return  Math.max(LongestCommonSebsequenceNaive(str1, str2, str1leng, str2leng - 1), LongestCommonSebsequenceNaive(str1, str2, str1leng - 1, str2leng))
	}
}

// use wrapper for LongestCommonSebsequenceNaive

function LongestCommonSebsequenceNaiveWrapper(str1, str2){
	return LongestCommonSebsequenceNaive(str1, str2, str1.length, str2.length)
}


//testing case : LongestCommonSebsequenceNaiveWrapper('uuuu', '1'); => return 1

// dynamic programming:
// 재귀 호출의 개념은, 테이블이나 혹은 케시의 개념으로 변환시켜 문제를 풀어갈 수 있다. 
// 프로그래밍에서 항상 쓰이는 개념 row col의 개념으로 대입해서 생각하면 더 쉬울 수 있다. 
// 각 row를 str1, 각 col을 str2로 .
// 그리고, row에 있는 각 아이템의 위치를 i, col에 있는 각 아이템의 위치를 j로 잡아 생각해 보자. 
function LongestCommonSebsequenceDP(str1, str2){
	var matrix = Array(str1.length + 1).fill(Array(str2.length + 1).fill(0)),
		rowLeng = str1.length + 1,
		colLeng = str2.length + 1,
		max = 0;
	for(var row = 1; row < rowLeng; row++){
		for(var col = 1; col < colLeng; col++){
			var str1Char = str1.charAt(row - 1),
				str2Char = str2.charAt(col - 1);
			if(str1Char == str2Char){
				//여기에서, 수를 카운트한다.
				matrix[row][col] = matrix[row - 1][col - 1] + 1;
				max = Math.max(matrix[row][col], max);
			}
		}
	}
	return max;
}

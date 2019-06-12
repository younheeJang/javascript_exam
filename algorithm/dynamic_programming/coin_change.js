//합이 N을 충족하는, 코인의 종류로 사용할 구성요소 자료구조 set이지 않을까 한다 아무래도... S, 그리고 이 
//S의 사이즈 M.최적화 구조를 위한 조건. M번째 코인을 뺀 솔루션을 제공할 것, 
//그리고 솔루션 중 최소한 하나는 M번째 코인이 들어갈 것.

//coinChange(S, M, N)은, 코인이 체인지되는 수를 카운트하는 함수이다. 
//기저가 되는 수학적 공식: coinChange(S, M, N) = coinChange(S, M-1, N) + coinChange(S, M, N-Sm)

//with recurion conception: Time Complexity: O(nm) / Space Complexity: O(n)
//m은 coin들의 가능한 조합 수, n은 변화할 coin임.
function countCoinCombinations(coinArr, coinNum, coinVal){
	if(coinVal == 0) return 1;
	if(coinVal < 0 || (coinNum <= 0 && coinVal >= 1)) return 0;
	return countCoinCombinations(coinArr, coinNum - 1, coinVal) + 
	countCoinCombinations(coinArr, coinNum, coinVal - coinArr[coinNum - 1]);
}

function countCoinCombinationsWrapper(coinArr, coinVal){
	return countCoinCombinations(coinArr, coinArr.length, coinVal);
}

console.log(countCoinCombinationsWrapper[1,2,3], 4);


//재귀 개념이 아니라 디피 개념으로 풀기 위해선, 
//이미 계산된 결과를 저장할 필요가 있다. 
//table(matrix자료형태를 생각하면 됌) 말은 쉽지... / 
//hint. coinVal 을 row의 수 , coinNum을 col의 수.
// i를 coinVal, j를 coinNum.
//결과적으로, row col조합의 매트릭스 자료구조, 음. 테이블 형태로 coin의 val과 coin의 num을 넣어 놓고
//i, j로 각 매트릭스 안에서 해당 값에 접근할 수 있다. 
function countCoinCombinationsDP(coinArr, coinNum, coinVal){
	var matrix = [];
	for(var i = 0; i <= coinVal; i++){
		matrix[i] = [];
		for(var j = 0; j < coinNum; j++){
			matrix[i][j] = undefined;
		}
	}
	for(var i = 0; i < coinNum; i++) matrix[0][i] = 1;
	for(var i = 1; i < coinVal + 1; i++)
}

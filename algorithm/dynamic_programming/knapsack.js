/*
n이라는 weight그리고 아이템의 values, 이것들을 주어진 knapsack의 capacity에 넣기
knapsack의 최대 총 합을 구히기 위해.
*/

/*
최적화 구조----
배열 안의 모든 아이템은, 아래와 같은 조건을 거쳐 최적화된다. 
-최적화된 subset안에 넣어야 하고, 최적화된 set에는 포함시키지 않을 것. 
그리고, 최대값은 아래의 하나를 반드시 충족해야 한다. 
-else: (n번째 아이템을 추출: n-1아이템과 함께 최대값을 얻을 것)
-else if: (n번째 아이템을 포함: n-1아이템 마이너스 n번째 아이템. W보다 작을 것.)
*/


//원 구현 방식의 최적화 구조는 재귀 호출을 사용한다. 
function knapsackNaive(idx, weights, values, target){
	var result = 0;
	if(idx <= -1 || target <= 0) result = 0;
	else if(weights[idx] > target) result = knapsackNaive(idx - 1, weights, values, target);
	else {
		var current = knapsackNaive(idx - 1, weights, values, target);
		var currentPlusOther = values[idx] + knapsackNaive(idx - 1, weights, values, target - weights[idx]);
		result = Math.max(current, currentPlusOther);
	}
	return result;
}


var weights = [1,2,4,2,5],
	values = [5,3,5,3,2],
	target = 10;

	console.log(knapsackNaive(4,weights, values, target));

	//이걸 DP로 풀려면, 미리 계산된 결과는 저장을 하고, 다시 사용할 수 있어야 함.

	function knapsackDP(index, weights, values, target, matrixDP) {
		var result = 0;
	
		if (index <= -1 || target <= 0) {
			result = 0;
		} else if (weights[index] > target) {
			result = knapsackDP(index - 1, weights, values, target, matrixDP);
		} else {
			var current = knapsackDP(index - 1, weights, values, target),
				currentPlusOther = values[index] + knapsackDP(index - 1, weights, values, target - weights[index]);
			result = Math.max(current, currentPlusOther);
		}
		return result;
	}
	knapsackDP(4, weights, values, target, {});

	//<script src="https://gist.github.com/danwoods/7496329.js"></script>
	
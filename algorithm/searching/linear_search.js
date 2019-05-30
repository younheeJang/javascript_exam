//if n exists, return index, if is not, return false
function linear_search(array, n){
	for(var i = 0; i < array.length; i++){
		if(array[i] == n){
			return i;
		}
	}
	return false;
}

//test senario
//array = [1,2,4,5,6]
//linear_search(array, 7) -> false
//linear_search(array, 1) -> 0



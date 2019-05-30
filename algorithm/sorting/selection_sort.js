function swap(array, idx1, idx2){
	var temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

function selection_sort(array){
	var len = array.length, min;
	for(var i = 0; i < len; i++){
		//일단, first idx is default for min 
		min = i;
		//그 다음,
		for(j = i + 1; j < len; j++){
			if(array[j] < array[min]){
				min = j;
			}
		}
		//그러고 나서, when min is not the i, swap it.
		if(i != min){
			swap(array, i, min);
		}
	}
return array;
}

//var array = [4,7,5,6,1];
//selection_sort(array); -> [1,4,5,6,7]

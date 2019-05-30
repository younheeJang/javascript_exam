function swap(array, idx1, idx2){
	var temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

function insertion_sort(array){
	var len = array.length,
		value,
		idxUnsorted,
		idxSorted;
	for(i = 0; i < len; i++){
		value = array[i];
		//if prev is bigger than next, change all bigger one with smaller one.
		for(j = i - 1; j > -1 && array[j] > value; j--){
			array[j + 1] = array[j];
		}
		array[j + 1] = value;
	}
	return array;
}

//var array = [4,7,5,6,1];
//selection_sort(array); -> [1,4,5,6,7]

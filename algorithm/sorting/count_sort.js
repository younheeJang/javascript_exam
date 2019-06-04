function count_sort(array){
	var hash = {}, eachCountArr = [];
	for(var i = 0; i < array.length; i++){
		if(!hash[array[i]]){
			hash[array[i]] = 1;
		}else{
			hash[array[i]]++;
		}
	}
	for(var key in hash){
		for(var i = 0; i <hash[key]; i++){
			eachCountArr.push(parseInt(key));
		}
	}
	return eachCountArr;
}

count_sort([6,1,23,2,3,2,1,2,2,3,3,1,4,2,3]);
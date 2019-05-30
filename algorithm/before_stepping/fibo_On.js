function fibo_On(n, last, prelast){
	if(n == 0){
		return last;
	}
	if(n == 1){
		return last;
	}
	return fibo_On(n - 1, prelast, last + prelast)
}
//재귀 호출이 한번 실행되므로써 더 효율적인 재귀 피보 함수를 작성할 수 있다. 
//fibo(n-1) + fibo(n + 2) 이런것과 비교하면. 
//대신 인자로 받아야 하는 것들이 좀 늘어나지... 

function fibo(n){
	if(n <= 1){
		return n;
	} else {
		return fibo(n - 1) +  fibo(n - 2)
	}
}

//fibo_On(8, 1, 1) = 21
//fibo_On(10, 1, 1) = 55
//fibo(8) = 21
//fibo(10) = 55
//들어가는 인자가 늘어나서... 실행되는 함수가 좀 더 효율적이 되는 케이스.

function Stack(array){
	this.array = [];
	if(array) this.array = array;
}

Stack.prototype.getBuffer = function(){
	return this.array.slice();
}

Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
}

Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
}

Stack.prototype.push = function(value){
	this.array.push(value);
}

Stack.prototype.pop = function(){
	return this.array.pop();
}

function stackAccess(stack, n){
	var bufferArray = stack.getBuffer();
	if(n <= 0) throw 'error';
	//원 배열에 손상없이.
	var bufferStack = new Stack(bufferArray);
	//맨 윗단에서부터 뽑아낸다. n번째의 요소를 마지막에 리턴할 수 있도록.
	//만약 3번째 즉 n이 3이라면, 2, 1 ... n이 0이 되기 직전짜기 뽑고
	//마지막에 3번째를 리턴.
	while(--n!==0){
		bufferStack.pop();
	}
	return bufferStack.pop();
}

function stackSearch(stack, value){
	var bufferArray = stack.getBuffer();
	var bufferStack = new Stack(bufferArray);
	while(!bufferStack.isEmpty()){
		if(bufferStack.pop() == value){
			return true; 
		}
	}
	return false;
}

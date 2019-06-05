function HashTable(size){
	this.size = size;
	this.keys = this.initArray(size);
	this.values = this.initArray(size);
	this.limit = 0;
}

HashTable.prototype.put = function(k, v){
	if(this.limit >= this.size) throw 'hash table is full';
	var hashedIdx = this.hash(k), squareIdx = 1;

	//quadratic probing
	while(this.keys[hashedIdx] != null){
		hashedIdx += Math.pow(squareIdx, 2);
		hashedIdx =hashedIdx % this.size;
		squareIdx++;
	}
	this.keys[hashedIdx] = k;
	this.values[hashedIdx] = v;
	this.limit++;
}

HashTable.prototype.get = function(k){
	var hashedIdx = this.hash(k), squareIdx = 1;
	while(this.keys[hashedIdx] != k){
		hashedIdx += Math.pow(squareIdx, 2);
		hashedIdx = hashedIdx % this.size;
		squareIdx++;
	}
	return this.values[hashedIdx];
}

HashTable.prototype.hash = function(k){
	if(!Number.isInteger(k)) throw 'should integer';
	return k % this.size;
}

HashTable.prototype.initArray = function(size){
	var array = [];
	for(var i=0; i<size; i++){
		array.push(null);
	}
	return array;
}


var hashT = new HashTable(12);
hashT.put(7, 'c');
hashT.put(79, 'r');
hashT.put(75, 'i');
hashT.put(71, 'o');
hashT.put(77, 'u');

hashT;
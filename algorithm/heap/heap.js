function Heap(){
	this.items = [];
}

Heap.prototype.swap = function(idx1, idx2){
	var temp = this.items[idx1];
	this.items[idx1] = this.items[idx2];
	this.items[idx2] = temp;
}

Heap.prototype.parentIdx = function(idx){
	return Math.floor((idx - 1) / 2);
}

Heap.prototype.leftChildIdx = function(idx){
	return idx * 2 + 1;
}

Heap.prototype.rightChildIdx = function(idx){
	return idx * 2 + 2;
}

Heap.prototype.parent = function(idx){
	return this.items[this.parentIdx(idx)];
}

Heap.prototype.leftChild = function(idx){
	return this.items[this.leftChildIdx(idx)];
}

Heap.prototype.rightChild = function(idx){
	return this.items[this.rightChildIdx(idx)];
}

Heap.prototype.peek = function(item){
	return this.items[0];
}

//사이즈 함수는 heap의 사이즈를 리턴하는 헬퍼함수
Heap.prototype.size = function(){
	return this.items.length;
}


//요소를 추가하고 삭제할 때마다, heap의 구조가 유지 되어야 한다. 

//MinHeap
function MinHeap(){
	this.items = [];
}

//위에서 구현한 헬퍼 함수들을 카피해 민힙으로 가져온다.
MinHeap.prototype = Object.create(Heap.prototype);


//switchUp:top이 가장 작은 값이 되어야 하므로, 크다면 계속 바꾼다.
MinHeap.prototype.switchUp = function(){
	var idx = this.items.length - 1;
	while(this.parent(idx) && this.parent(idx) > this.items[idx]){
		this.swap(this.parentIdx(idx), idx);
		idx = this.parentIdx(idx);
	}
}

//switchDoun: 반대.
MinHeap.prototype.switchDown = function(){
	var idx = 0;
	while(this.leftChild(idx) && (this.leftChild(idx) < this.items[idx] || this.rightChild(idx) < this.items[idx])){
		var smallerIdx = this.leftChildIdx(idx);
		if(this.rightChild(idx) && this.rightChild(idx) < this.items[smallerIdx]){
			smallerIdx = this.rightChildIdx(idx);
		}
		this.swap(smallerIdx, idx);
		idx = smallerIdx;
	}
}

MinHeap.prototype.add = function(item){
	this.items[this.items.length] = item;
	this.switchUp();
}

MinHeap.prototype.poll = function(){
	var item = this.items[0];
	this.items[0] = this.items[this.items.length - 1];
	this.items.pop();
	this.switchDown();
	return item;
}

var h = new MinHeap();
h.add(1);
h.add(20);
h.add(4);
h.add(200);
h.add(7);

function MaxHeap(){
	this.items = [];
}

MaxHeap.prototype = Object.create(Heap.prototype);

MaxHeap.prototype.add = function(item){
	this.items[this.items.length] = item;
	this.switchUp();
}


MaxHeap.prototype.poll = function(){
	var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.switchDown();
    return item;
}

MaxHeap.prototype.switchDown = function(){
	var idx = 0;
	while(this.leftChild(idx) && (this.leftChild(idx) > this.items[idx] || this.rightChild(idx) > this.items[idx])){
		var biggerIdx = this.leftChildIdx(idx);
		if(this.rightChild(idx) && this.rightChild(idx) > this.items[biggerIdx]){
			biggerIdx = this.rightChildIdx(idx);
		}
		this.swap(biggerIdx, idx);
		idx = biggerIdx;
	}
}

MaxHeap.prototype.switchUp = function(){
	var idx = this.items.length - 1;
	while(this.parent(idx) && this.parent(idx) < this.items[idx]){
		this.swap(this.parentIdx(idx), idx);
		idx = this.parentIdx(idx);
	}
}


var h = new MaxHeap();
h.add(1);
h.add(20);
h.add(4);
h.add(200);
h.add(7);

console.log(h.poll());
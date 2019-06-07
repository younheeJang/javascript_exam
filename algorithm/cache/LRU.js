function DLLNode(key, data){
	this.key = key;
	this.data = data;
	this.next = null;
	this.prev = null;
}

function LRUCache(capacity){
	this.keys = {};
	this.capacity = capacity;
	this.head = new DLLNode('', null);
	this.tail = new DLLNode('', null);
	this.head.next = this.tail;
	this.tail.prev = this.head;
}

LRUCache.prototype.removeNode = function(node){
	var prev = node.prev,
		next = node.next;
	prev.next = next;
	next.prev = prev;
}

LRUCache.prototype.addNode = function(node){
	var originalTail = this.tail.prev;
	originalTail.next = node;
	this.tail.prev = node;
	node.prev = originalTail;
	node.next = this.tail;
}

//get: 
LRUCache.prototype.get = function(key){
	var node = this.keys[key];
	if(node === undefined){
		return null;
	}else{
		//지우고 다시 추가. 그래야 최근 사용 빈도수대로 head와 tail이 구성되기 때문
		this.removeNode(node);
		this.addNode(node);
		return node.data;
	}
}

LRUCache.prototype.set = function(key, value){
	var node = this.keys[key];
	if(node){
		this.removeNode(node);
	}
	var newNode = new  DLLNode(key, value);
	this.addNode(newNode);
	this.keys[key] = newNode;

	if(Object.keys(this.keys).length > this.capacity){
		var deletedHead = this.head.next;
		this.removeNode(deletedHead);
		delete this.keys[deletedHead.key];
	}
}

var LRU = new LRUCache(5);
LRU.set(1, 1); 
LRU.set(2, 2); 
LRU.set(3, 3); 
LRU.set(4, 4); 
LRU.set(5, 5); 

LRU.get(1);
LRU.get(2); 

LRU.set(6, 6); 
LRU.set(7, 7); 
LRU.set(8, 8); 
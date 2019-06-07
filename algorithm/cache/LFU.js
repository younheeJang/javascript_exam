//캐싱은 필요 빈도가 적어진 아이를 지워주고, 필요 빈도가 높은 데이터는
//따로 빠르게 찾을 수있는 위치에 저장해 놓으므로써 성능을 개선하는 데
//기여한다. 

//UFL은, 자주 사용된 빈도의 역순으로 저장 메모리의 한계를 넘으면
//저장된 데이터를 잘라내기 시작하며, 일단 이 삭제에 사용되는
//자료구조의 개념은 더블 링크드 리스트이다.



function LFUNode(key,value){
	this.prev = null;
	this.next = null;
	this.key = key;
	this.data = value;
	this.freqCount = 1;
}

function LFUDoubleLinkedList(){
	this.head = new LFUNode('buffer head', null);
	this.tail = new LFUNode('buffer tail', null);
	this.head.next = this.tail;
	this.tail.prev = this.head;
	this.size = 0;
}

//make cache
function LFUCache(capacity){
	this.keys = {};
	this.freq = {};
	this.capacity = capacity;
	this.minFreq = 0;
	this.size = 0;
}

LFUDoubleLinkedList.prototype.insertAtHead = function(node){
	node.next = this.head.next;
	this.head.next.prev = node;
	this.head.next = node;
	node.prev = this.head;
	this.size++;
}

LFUDoubleLinkedList.prototype.removeAtTail = function(){
	var removedTail = this.tail.prev;
	var prev = this.tail.prev;
	prev.prev.next = this.tail;
	this.tail.prev = prev.prev;
	this.size--;
	return removedTail;
}

LFUDoubleLinkedList.prototype.removeNode = function(node){
	node.prev.next = node.next;
	node.next.prev = node.prev;
	this.size--;
}


//set: 기존 아이템 대체 및 새로운 아이템 삽입의 기능.
LFUCache.prototype.set = function(key, value){
	var node = this.keys[key];
	if(node == undefined){
		node = new LFUNode(key, value);
		this.keys[key] = node;
		//용량 초과 안 되었으므로 걍 집어넣기
		if(this.size != this.capacity){
			if(this.freq[1] === undefined){
				this.freq[1] = new LFUDoubleLinkedList();
			}
			this.freq[1].insertAtHead(node);
			this.size++;
		//용량 초과이므로 지우고 집어넣기
		}else{
			var deletedTail = this.freq[this.minFreq].removeAtTail();
			delete this.keys[deletedTail.key];
			if(this.freq[1] === undefined){
				this.freq[1] = new LFUDoubleLinkedList();
			}
			this.freq[1].insertAtHead(node);
		}
		this.minFreq = 1;
	}else{
		var count = node.freqCount;
		node.data = value;
		node.freqCount++;
		this.freq[count].removeNode(node);
		if(this.freq[node.freqCount] === undefined){
			this.freq[node.freqCount] = new LFUDoubleLinkedList();
		}
		this.freq[node.freqCount].insertAtHead(node);
		if(count == this.minFreq && Object.keys(this.freq[count]).size == 0){
			this.minFreq++;
		}
	}
}

LFUCache.prototype.get = function(key){
	var node = this.keys[key];
	if(node == undefined){
		return null;
	}else{
		var count = node.freqCount;
		node.freqCount++;
		this.freq[count].removeNode(node);
		if(this.freq[node.freqCount] === undefined){
			this.freq[node.freqCount] = new LFUDoubleLinkedList();
		}
		this.freq[node.freqCount].insertAtHead(node);
		if(count == this.minFreq && Object.keys(this.freq[count]).length == 0){
			this.minFreq++;
		}
		return node.data;
	}
}

var myLFU = new LFUCache(5);
myLFU.set(1, 1); 
myLFU.set(2, 2);
myLFU.set(3, 3);
myLFU.set(4, 4);
myLFU.set(5, 5);
myLFU.get(1);
myLFU.get(1);
myLFU.get(1);
myLFU.set(6, 6);
myLFU.get(6);
function DoubleLinkedListNode(data){
	this.data = data;
	this.prev = null;
	this.next = null;
}

function DoubleLinkedList() {
	this.head = null;
	this.tail = null;
	this.size = 0;
}

DoubleLinkedList.prototype.isEmpty = function(){
	return this.size == 0;
}

/*
각 노드는 next prev라는 프로퍼티를 가짐.
더블 링크드 리스트라는 자료구조 안에서 이뤄지는
삭제, 삽입, 검색 등의 실행 과정은 
싱글 링크드 리스트와 비슷하지만, 
삭제와 삽입 과정에서는 next prev 두 프로퍼티가
처리되어야 힌다.  
 */


 DoubleLinkedList.prototype.insertFront = function(value){
	 if(this.head === null){
		 this.head = new DoubleLinkedListNode(value);
		 this.tail = this.head;
	 }else{
		 //step01: 현 헤드를 새 노드의 next로 위치
		 //step02: 현 헤드의 이전 위치를 새 노드로 지정
		 //step03: 현 헤드를 새 노드로 지정.
		 //res : 현 더블 링크드 리스트의 헤드는 새로 들어온 노드가 됨.
		var temp = new DoubleLinkedListNode(value);
		temp.next = this.head;
		this.head.prev = temp;
		this.head = temp;
	 }
	 this.size++;
 }

 DoubleLinkedList.prototype.insertTail = function(value) {
	 if(this.tail === null){
		 this.tail = new DoubleLinkedListNode(value);
		 this.head = this.tail;
	 }else {
		 var temp = new DoubleLinkedListNode(value);
		 temp.prev = this.tail;
		 this.tail.next = temp;
		 this.tail = temp;
	 }
	 this.size++;
 }

 DoubleLinkedList.prototype.deleteFront = function(){
	 var deletedHead = null;
	 if(this.head !== null){
		deletedHead = this.head.data;
		if(this.tail === this.head){
			this.head = null;
			this.tail = null;
		}else {
			this.head = this.head.next;
			this.head.prev = null;
		}
	 }
	 this.size--;
	 return deletedHead;
 }

 DoubleLinkedList.prototype.deleteTail = function(){
	 var deletedTail = null;
	if(this.tail !== null){
		deletedTail = this.tail.data;
		if(this.tail === this.head){
			this.head = null;
			this.tail = null;
		}else{
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
	}
	 this.size--;
	 return deletedTail;
 }


//포인터로 next를 사용한다. 
DoubleLinkedList.prototype.findFromHead = function(value){
	var currentHead = this.head;
	while(currentHead.next){
		if(currentHead.data === value){
			return true;
		}
		currentHead = currentHead.next;
	}
	return false;
}

DoubleLinkedList.prototype.findFromTail = function(value){
	var currentTail = this.tail;
	while(currentTail.prev){
		if(currentTail.data === value){
			return true;
		}
		currentTail = currentTail.prev;
	}
	return false;
}

//포인터로 prev를 사용한다. 

 var d = new DoubleLinkedList();
 d.insertTail(1);
 d.insertTail(11);
 d.insertTail(111);
d.findFromTail(11);
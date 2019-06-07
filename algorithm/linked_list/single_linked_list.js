function Node(data){
	this.data = data;
	this.next = null;
}

function SingleLinkedList(){
	this.head = null;
	this.size = 0;
}

SingleLinkedList.prototype.isEmpty = function(){
	return this.size == 0;
}

SingleLinkedList.prototype.insert = function(value){
	//첫 데이터라면 새로운 노드를 생성한다. 
	if(this.head === null){
		this.head = new Node(value);
	}else{
		//아니면 앞 노드와 연결해 준다.
		var temp = this.head;
		this.head = new Node(value);
		this.head.next = temp;
	}
	this.size++;
}

SingleLinkedList.prototype.remove = function(value){
	var currendHead = this.head;
	//지울 것이 현재 헤드 즉 첫번째 요소일 떄.
	if(currendHead.data == value){
		this.head = currendHead.next;
		this.size--;
	}else{
		var prev = currendHead;
		//첫 요소가 아니면, value가 있는 노드 자체를 스킵.
		//그럼 참조가 없어지면서 자연스럽게 처리됨. 널널널
		while(currendHead.next){
			if(currendHead.data == value){
				//next를 설정해 주므로써 지우고 싶은 노드는 참조를 잃게되고
				prev.next = currendHead.next;
				//next뿐 아니라 노드 자체도 설정하여 완벽을 꿈꾼다.
				prev = currendHead;
				//cause prev.nex === currentHead
				currendHead = currendHead.next;
				break;
			}
			prev = currendHead;
			currendHead = currendHead.next;
		}
		//tail
		if(currendHead.data === value){
			prev.next = null;
		}
		this.size--;
	}
}

SingleLinkedList.prototype.find = function(value){
	var currentHead = this.head;
	while(currentHead.next){
		if(currentHead.data === value){
			return true;
		}
		currentHead = currentHead.next;
	}
	return false;
}


var s = new SingleLinkedList(); 
s.insert(11);
s.insert(111);
s.insert(114);
s.insert(119);

s.remove(114);

s
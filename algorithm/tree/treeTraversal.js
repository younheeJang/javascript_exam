function BinaryTreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree(){
	this._root = null;
}

BinaryTree.prototype.traversePreOrder = function(){
	traversePreOrderHelper(this._root);
	function traversePreOrderHelper(node){
		if(!node) return;
		console.log(node.value);
		traversePreOrderHelper(node.left);
		traversePreOrderHelper(node.right);
	}
}

//중 좌 우
BinaryTree.prototype.traversePreOrderIterative = function(){
	var nodeStack = [];
	nodeStack.push(this._root);
	while(nodeStack.length){
		var node = nodeStack.pop();
		console.log(node.value);
		if(node.right) nodeStack.push(node.right);
		if(node.left) nodeStack.push(node.left);
	}
}




BinaryTree.prototype.traverseInOrder = function(){
	traverseInOrderHelper(this._root);
	function traverseInOrderHelper(node){
		if(!node) return;
		traverseInOrderHelper(node.left);
		console.log(node.value);
		traverseInOrderHelper(node.right);
	}
}

//좌 중 우
BinaryTree.prototype.traverseInOrderIterative = function(){
	var current = this._root,
		temp_arr = [],
		flag = false;
	
	while(!flag){
		if(current != null){
			temp_arr.push(current);
			current = current.left;
		}else{
			if(temp_arr.length){
				current = s.pop();
				console.log(current.value);
				current = current.right;
			}else{
				done = true;
			}
		}
	}
}





BinaryTree.prototype.traversePostOrder = function(){
	traversePostOrderHelper(this._root);
	function traversePostOrderHelper(node){
		if(node.left) traversePostOrderHelper(node.left);
		if(node.right) traversePostOrderHelper(node.right);
		console.log(node.value);
	}
}

//좌 우 중
BinaryTree.prototype.traversePostOrderIterative = function(){
	//스택활용
	var stackA = [],
		stackB = [];
		stackA.push(this._root);
		while(stackA.length){
			var node = stackA.pop();
			stackB.push(node);

			if(node.left) stackA.push(node.left);
			if(node.right) stackA.push(node.right);
		}
		while(stackB.length){
			var node = stackB.pop();
			console.log(node.value);
		}

}




//왕좌의 겜 = BFS라고도 알려짐.
BinaryTree.prototype.traverseLevelOrder = function(){
	var root = this._root,
	queue = [];
	if(!root) return;
	queue.push(root);
	while(queue.length){
		var temp = queue.shift();
		console.log(temp.value);
		if(temp.left) queue.push(temp.left);
		if(temp.right) queue.push(temp.right);
	}
}
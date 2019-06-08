function AVLTree(value){
	this.left = null;
	this.right = null;
	this.value = value;
	this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function(){
	//depth초기화
	if(this.node == null) this.depth = 0;
	else this.depth = 1;

	//left, right depth 초기화
	if(this.left != null) this.depth = this.left.depth + 1;
	if(this.right != null && this.depth <= this.right.depth) this.depth = this.right.depth + 1; 
}

//왼쪽으로 우회시킴: 트리 구조가 한쪽으로 치우칠 경우. 15-18-19일 떄, 18(root)-15(l)-19(r)로.
AVLTree.prototype.rotateLeft = function(){
	var value = this.value;
	var right = this.right;
	this.value = this.left.value;

	this.right = this.left;
	this.left = this.left.left;
	this.right.left = this.right.right;
	this.right.right = right;
	this.right.value = value;

	this.right.setDepthBasedOnChildren();
	this.setDepthBasedOnChildren();
}

AVLTree.prototype.rotateRight = function(){
	var value = this.value;
	var left = this.left;
	this.value = this.right.value;

	this.left = this.right;
	this.right = this.right.right;
	this.left.right = this.left.left;
	this.left.left = left;
	this.left.value = value;
	
	this.left.setDepthBasedOnChildren();
	this.setDepthBasedOnChildren();
}

// 한쪽만 돌리냐 여기 돌렸다 저기돌렸다도 한다.
//rotate right left : 20-40-30일 경우, 20-30-40으로 right돌리긔, 30(root)-20(l)-40(r)왼 돌려 트리 벨런스 맞추긔
//rotate left right : 반대.
AVLTree.prototype.getBalance = function(){
	var leftDepth = this.left == null ? 0 : this.left.depth;
	var rightDepth = this.right == null ? 0: this.right.depth;
	if(leftDepth > rightDepth + 1){
		var leleDepth = this.left.left == null ? 0 : this.left.left.depth;
		var leriDepth = this.left.right == null ? 0 : this.left.right.depth;

		if(leleDepth < leriDepth){
			this.left.rotateRight();
		}
		this.rotateLeft();
	}else if(leftDepth + 1 < rightDepth){
		var ririDepth = this.right.right == null ? 0 : this.right.right.depth;
		var rileDepth = this.right.left == null ? 0 : this.right.left.depth;
		if(rileDepth > ririDepth){
			this.right.rotateLeft();
		}
		this.rotateRight();
	}
}

AVLTree.prototype.insert = function(value){
	var isChild = false;
	if(value == this.value) return false;
	else if(value < this.value) {
		if(this.left == null) {
			this.left = new AVLTree(value);
			isChild = true;
		}else{
			isChild = this.left.insert(value);
			if(isChild == true) this.getBalance();
		}
	}else if(value > this.value){
		if(this.right == null){
			this.right = new AVLTree(value);
			isChild = true;
		}else {
			isChild = this.right.insert(value);
			if(isChild == true) this.getBalance();
		}
	}
	if(isChild == true) this.setDepthBasedOnChildren();
	return isChild;
}

AVLTree.prototype.remove = function(value){
	return removeRecursively(this, value);
	function removeRecursively(root, value){
		if(!root) return null;
		else if(value < root.value) root.left = removeRecursively(root.left, value);
		else if(value > root.value) root.right  = removeRecursively(root.right, value);
		else{
			if(!root.left && !root.right) return null;
			else if(!root.left) {
				root = root.right;
				return root;
			}else if(!root.right){
				root = root.left;
				return root;
			}else {
				var temp = Minimum(root.right);
				root.value = temp.value;
				root.right = removeRecursively(root.right, temp.value);
				return root;
			}
		}
		root.setDepthBasedOnChildren();
		return root;
	}
	function Minimum(root){
		while(root.left) root = root.left;
		return root;
	}
}

var avl = new AVLTree(1, '');
avl.insert(2);
avl.insert(3);
avl.insert(4);
avl.insert(5);
console.log(avl);
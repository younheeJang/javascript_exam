//좌 우 두 쪽에 자식 요소를 가짐. 그러나, 좌 요소는 부모보다 작아야 하고 우 요소는 부모보다 커야 한다. 
//요소 검색 삽입 삭제 등 특정 요소에 대한 조작의 시간 복잡도는 O(log2(n))이다.
function BinarySearchTree(){
	this._root = null;
}


//이 자료 구조는 한쪽으로 치우칠 수도 있는데, 예를 들어 루트보다 자식요소들이 죄다 클 경우, 오른쪽 노드만 존재하게 된다. 그럼 시간 복잡도는 오엔.


//insertion: 
//if: 루트가 비어있다. 새로운 노드로 채워진다. 
//else:iterate tree until .... each condition ends.
//시간복잡도(균형잡힌 트리): O(log2(n)) / 한쪽으로 치우쳤을 때: O(n)
BinarySearchTree.prototype.insert = function(value){
	var node = { left: null, right: null, value: value};
	if(!this._root) this._root = node;
	else{
		var root = this._root;
		while(true){
			if(root.value > value){
				if(root.left != null){
					root = root.left;
				}else{
					root.left = node;
					break;
				}
			}else if(root.value < value){
				if(root.right != null){
					root = root.right;
				}else {
					root.right = node;
					break;
				}
			}else {
				break;
			}
		}
	}
}


//지울 때:
//no children, one child, two children
BinarySearchTree.prototype.remove = function(value){
	return removeRecursively(this._root, value);
	function removeRecursively(root,  value){
		if(!root){
			return null;
		}else if(value < root.value){
			root.left = removeRecursively(root.left, value);
		}else if(value > root.value){
			root.right = removeRecursively(root.right, value);
		}else{
			if(!root.left && !root.right){
				return null;
			}else if(!root.left){
				root = root.left;
				return root;
			}else if(!root.right){
				root = root.right;
				return root;
			}else{
				var temp = Minimum(root.right);
				root.value = temp.value;
				root.right = removeRecursively(root.right, temp.value);
				return root;
			}
		}
		return root;
	}
	function Minimum(root){
		while(root.left){
			root = root.left;
		}
		return root;
	}
}


BinarySearchTree.prototype.find = function(value){
	var root = this._root,
		flag = false;
		while(root){
			if(root.value > value){
				root = root.left;
			}else if(root.value < value){
				root = root.right;
			}else{
				flag = true;
				break;
			}
		}
		return flag;
}

var bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(2);

function TrieNode(){
	this.children = {};
	this.isEndString = false;
}

function Trie(){
	this.root = new TrieNode();
}

Trie.prototype.insert = function(str){
	var current = this.root;
	for(var i = 0; i< str.length; i++){
		var char = str.charAt(i);
		var node = current.children[char];
		if(node == null){
			node = new TrieNode();
			current.children[char] = node;
		}
		current = node;	
	}
	current.isEndString = true;
}

Trie.prototype.search = function(str){
	var current = this.root;
	for(var i = 0; i < str.length; i++){
		var char = str.charAt(i);
		var node = current.children[char];
		if(node == null){
			return false;
		}
		current = node;
	}
	return current.isEndString;
}

Trie.prototype.delete = function(str){
	this.deleteRecursively(this.root, str, 0);
}

Trie.prototype.deleteRecursively = function(current, str, idx){
	//비교해서 확실히 같은 거면 지워야 하니까, 
	if(idx == str.length){
		if(!current.isEndString) return false;
		current.isEndString = false;
		return Object.keys(current.children).length == 0;		
	}
	var char = str.charAt(idx),
		node = current.children[char];
	if(node == null){
		return false;
	}
	var deleteNode = this.deleteRecursively(node, str, idx + 1);
	if(deleteNode){
		delete current.children[char];
		return Object.keys(current.children).length == 0;
	}
	return false;
}

var trie = new Trie();
trie.insert("curious");
trie.search("curious");
trie.delete("curious");

trie
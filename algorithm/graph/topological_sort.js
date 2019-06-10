DirectedGraph.prototype.topologicalSortHelper = function(node, visited, stack){
	visited.add(node);
	for(var item in this.edges[vertex]){
		if(visited.has(item) == false){
			this.topologicalSortHelper(item, visited, stack);
		}
	}
	stack.unshift(vertex);
};

DirectedGraph.prototype.topologicalSort = function() {
	var visited = new Set(),
		stack = [];
	for(var item in this.edges){
		if(visited.has(item) == false){
			this.topologicalSortHelper(item, visited, stack);
		}
	}
	return stack;
}

var g = new DirectedGraph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');

g.addEdge('b', 'a');
g.addEdge('d', 'c');
g.addEdge('d', 'b');
g.addEdge('b', 'a');
g.addEdge('a', 'f');
g.addEdge('e', 'c');

var topologicalOrder = g.topologicalSort();
console.log(g);
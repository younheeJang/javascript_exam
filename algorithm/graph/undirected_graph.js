function UndirectedGraph() {
	this.edges = {};
}

UndirectedGraph.prototype.addVertex = function(vertex){
	this.edges[vertex] = {};
}

UndirectedGraph.prototype.addEdge = function(vertex1, vertex2, weight){
	if(weight == undefined) weight = 1;
	this.edges[vertex1][vertex2] = weight;
	this.edges[vertex2][vertex1] = weight;
}

var g = new UndirectedGraph();
g.addVertex('a');
g.addVertex('b');
g.addEdge('a','b', 10); 
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addEdge('b','c', 20);
g.addEdge('c','d', 30);
g.addEdge('d','e', 40);
g.addEdge('a','e', 50);
g.edges;

//to remove edge, have to remove vertices related with edge. 
UndirectedGraph.prototype.removeEdge = function(vertex1, vertex2){
	if(this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined){
		delete this.edges[vertex1][vertex2];
	}
	if(this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined){
		//using javascript's delete operator
		delete this.edges[vertex2][vertex1];
	}
}

//to remogve vertex, have to get rid of all relates line, edge
UndirectedGraph.prototype.removeVertex = function(vertex){
	for(var neighborVertex in this.edges[vertex]){
		this.removeEdge(neighborVertex, vertex);
	}
	delete this.edges[vertex];
}

var g = new UndirectedGraph();
g.addVertex('a');
g.addVertex('b');
g.addEdge('a','b', 10); 
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addEdge('b','c', 20);
g.addEdge('c','d', 30);
g.addEdge('d','e', 40);
g.addEdge('a','e', 50);

//remove all vertex with edges in graph
g.removeVertex('e');
g.removeVertex('a');

//remove all properties related edge parameters
g.removeEdge('b', 'c');



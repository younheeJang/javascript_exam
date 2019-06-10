function DirectedGraph(){
	this.edges = {};
}

DirectedGraph.prototype.addVertex = function(vertex){
	this.edges[vertex] = {};
}

//무조건 이어졌던 언다이렉티드 그래프와는 달리, 방향성을 지시하여 Edge를 추가.
DirectedGraph.prototype.addEdge = function(fromVertex, toVertex, weight){
	if(weight === undefined) weight = 0;
	this.edges[fromVertex][toVertex] = weight;
}

DirectedGraph.prototype.removeEdge = function(fromVertex, toVertex){
	if(this.edges[fromVertex] && this.edges[fromVertex][toVertex] != undefined){
		delete this.edges[fromVertex][toVertex];
	}
}

DirectedGraph.prototype.removeVertex = function(vertex){
	for(var neighborVertex in this.edges[vertex]){
		this.removeEdge(neighborVertex, vertex);
	}
	delete this.edges[vertex];
}

//방향성이 있는 그래프는, BFS라는 탐색 방법을 사용할 수 있다.
DirectedGraph.prototype.traverseBFS = function(vertex, func){
	var queue = [],
		visited = {};
	queue.push(vertex);
	while(queue.length){
		vertex = queue.shift();
		if(!visited[vertex]){
			visited[vertex] = true;
			func(vertex);
			for(var neighborVertex in this.edges[vertex]){
				queue.push(neighborVertex);
			}
		}
	}
}


DirectedGraph.prototype.traverseDFS = function(vertex, func){
	var visited = {};
	this._traverseDFS(vertex, visited, func);
}

DirectedGraph.prototype._traverseDFS = function(vertex, visited, func){
	visited[vertex] = true;
	func(vertex);
	for(var neighborVertex in this.edges[vertex]){
		if(!visited[neighborVertex]){
			this._traverseDFS(neighborVertex, visited, func);
		}
	}
}

function _isEmpty(obj){
	return Object.keys(obj).length === 0;
}

function _extractMinimum(Q, dist){
	var shortestDistance = Infinity,
		nodeWithShortestDistance = null;
	for(var node in Q){
		if(dist[node] <= shortestDistance){
			shortestDistance = dist[node];
			nodeWithShortestDistance = node;
		}
	}
	return nodeWithShortestDistance;
}

DirectedGraph.prototype.Dijkstra = function(core){
	var Q = {}, dist = {};
	for(var vertex in this.edges){
		dist[vertex] = Infinity;
		Q[vertex] = this.edges[vertex];
	}
	dist[core] = 0;
	while(!_isEmpty(Q)){
		var u = _extractMinimum(Q, dist);
		delete Q[u];
		for(var neighbor in this.edges[u]){
			var alt = dist[u] + this.edges[u][neighbor];
			if(alt < dist[neighbor]){
				dist[neighbor] = alt;
			}
		}
	}
	return dist;
}

var d = new DirectedGraph();
d.addVertex("a");
d.addVertex("b");
d.addVertex("c");
d.addVertex("d");
d.addEdge('a', 'b', 1);
d.addEdge('b', 'c', 1);
d.addEdge('c', 'a', 1);
d.addEdge('a', 'd', 1);
//  Graphs are the go to data structure when you need to represent entities and the relationships between them.
// Graphs can be stored in 2 ways
// 1) AdjacentMatrix -- all connected and non connected data should be present -- O(|v|2)
// 2) adjacent List -- only vertext and edges data will be stored -- O(|v|+|e|)

function Graph() {
    this.list = {};
}

Graph.prototype.addVertex = function (vertex) {
    if (!this.list[vertex]) {
        this.list[vertex] = [];
        return true;
    }
    return false;
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
    if (this.list[vertex1 && this.list[vertex2]]) {
        this.list[vertex1].push(vertex2);
        this.list[vertex2].push(vertex1);
        return true;
    }
    return false;
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {};
Graph.prototype.removeVertex = function (vertex) {};

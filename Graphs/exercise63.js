// Find the inner-most cycles in a graph


class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();

myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addEdge('0', '1');
myGraph.addEdge('1', '2');
myGraph.addEdge('2', '0');
myGraph.addEdge('5', '1');
myGraph.addEdge('5', '0');
myGraph.addEdge('3', '0');
myGraph.addEdge('3', '2');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '1');

let = adjacentListOfGraph = myGraph.adjacentList;
let vertexObject = [];

for (const vertex in adjacentListOfGraph) {
    let object = {};
    object["vertex"] = vertex;
    object["adjList"] = adjacentListOfGraph[vertex];
    vertexObject.push(object);
}

let graph = {
    vertices:  vertexObject
}

function findCycles(graph){
    let repeated = [];
    console.log(graph)
    let sortedGraph = getSortedVertices(graph);
    let spanningTree = getSpanningTree(sortedGraph);
    console.log(spanningTree)
    let allCycles = getAllCycles(graph, spanningTree);
    return allCycles;
}

function getSortedVertices(graph){
    console.log(graph)
    graph.vertices.sort(function(a,b){
        return b.adjList.length - a.adjList.length;
    })
    console.log(graph)
    return graph;
}

function getSpanningTree(graph){
    const spanningTree = new Map();
    graph.vertices.forEach((node) => {
        spanningTree.set(node.vertex, new Set());
    })
    console.log(graph.vertices)
    let visitedVertices = new Set();

    graph.vertices.forEach((node) => {
        node.adjList.forEach((child) => {
            if(!visitedVertices.has(child)) {
                visitedVertices.add(child);
                spanningTree.get(node.vertex).add(child);
                spanningTree.get(child).add(node.vertex);
            }
        })
    })
    return spanningTree;
}

function getAllCycles(graph, spanningTree){
    let cycles = [];
    let rejectedEdges = getRejectedEdges(graph, spanningTree);
    console.log(rejectedEdges)
    rejectedEdges.forEach((edge) => {
        ends = edge.split("-");
        let start = ends[0];
        let end = ends[1];
        let cycle = findCycle(start, end, spanningTree);
        console.log(cycle)
        if(!!cycle){
            cycles.push(cycle);
        }
    })
    return cycles;
}

function getRejectedEdges(graph, spanningTree) {
    let rejectedEdges = new Set();
    
    graph.vertices.forEach((node) => {
        if(spanningTree.has(node.vertex)){
            node.adjList.forEach((child) => {
                if(!spanningTree.get(node.vertex). has(child)) {
                    if(!rejectedEdges.has(child + "-" + node.vertex)){
                        rejectedEdges.add(node.vertex + "-" + child)
                    }
                }
            })
        }
    })
    return rejectedEdges;
}

function findCycle(start, end, spanningTree, visited = new Set(), parents = new Map(), currentNode = start, parentNode = ""){
    let cycle = null;
    visited.add(currentNode);
    parents.set(currentNode, parentNode);
    const destinations = spanningTree.get(currentNode);

    for(let destination of destinations){
        if(destination === end) {
            cycle = getCyclePath(start, end, currentNode, parents);
            console.log(cycle)
            return cycle;
        }
        if(destination === parents.get(currentNode)){
            continue;
        }
        if(!visited.has(destination)){
            cycle = findCycle(start, end, spanningTree, visited, parents, destination, currentNode);
            console.log(cycle)
            if(!!cycle) return cycle;
        }
    }
    return cycle;
}

function getCyclePath(start, end, current, parents){
    let cycle = [end];
    console.log(cycle)
    console.log(current)
    console.log(start)
    console.log(parents)
    while (current != start) {
        cycle.push(current);
        current = parents.get(current);
    }
    cycle.push(start);
    return cycle;
}

console.log(findCycles(graph));
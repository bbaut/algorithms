// Implement shortest path algorithm for unweighted graphs. BFS approach

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

myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addVertex('7')
myGraph.addVertex('8')
myGraph.addVertex('9')
myGraph.addVertex('10')
myGraph.addVertex('11')
myGraph.addVertex('12')
myGraph.addVertex('13')
myGraph.addVertex('14')
myGraph.addEdge('1', '2');
myGraph.addEdge('2', '3');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '6');
myGraph.addEdge('4', '7');
myGraph.addEdge('5', '6');
myGraph.addEdge('3', '5');
myGraph.addEdge('7', '8');
myGraph.addEdge('6', '10');
myGraph.addEdge('5', '9');
myGraph.addEdge('10', '9');
myGraph.addEdge('10', '11');
myGraph.addEdge('11', '12');
myGraph.addEdge('12', '13');


function printShortestPath(adjListObj, vertices, source, destination){
    let predecesor = new Array(vertices).fill(0);
    let distance = new Array(vertices).fill(0);
    let adjList = new Array(vertices);

    for(let vertex in adjListObj){
        adjList[vertex] = adjListObj[vertex];
    }

    if(BFS(adjList, vertices, source, destination, predecesor, distance) == false) {
        return false;
    }

    let path = new Array();
    let crawl = destination;

    path.push(crawl);

    while(predecesor[crawl] != -1) {
        path.push(predecesor[crawl]);
        crawl = predecesor[crawl];
    }

    return distance[destination];
}

function BFS (adjList, vertices, source, destination, predecesor, distance) {
    const veryLargeNumber = 91246756875643213;

    let queue = [];
    let visited = new Array(vertices);

    for(let i=0; i<vertices; i++){
        visited[i] = false;
        distance[i] = veryLargeNumber;
        predecesor[i] = -1;
    }

    visited[source] = true;
    distance[source] = 0;
    queue.push(source);

    while (queue.length > 0) {
        let queueElement = queue[0];
        queue.shift();

        for(let i = 0; i < adjList[queueElement].length; i++){
            if(visited[adjList[queueElement][i]] == false) {
                visited[adjList[queueElement][i]] = true;
                distance[adjList[queueElement][i]] = distance[queueElement] + 1;
                predecesor[adjList[queueElement][i]] = queueElement;
                queue.push(adjList[queueElement][i]);

                if (adjList[queueElement][i] == destination){
                    return true;
                }
            }
        }
    }
    return false;
}

let adjacentList = myGraph.adjacentList;
let vertices = myGraph.numberOfNodes;
let source = 3;
let destination= 13;

console.log(printShortestPath(adjacentList, vertices, source, destination));
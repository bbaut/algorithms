//Topological sort

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
    }

    topologicalSort(){
        let stack = [];
        let visited = [];
        let listOfNodesSorted = [];

        for(let i = 0; i < this.numberOfNodes; i++){
            visited[i] = false;
        }

        for(let i = 0; i < this.numberOfNodes; i++){
            console.log(i)
            if(visited[i] === false) {
                this.topologicalSortHelper(i, visited, stack)
            }
        }
    
        while (stack.length != 0){
            let node = stack.pop()
            listOfNodesSorted.push(node)
        }
        return listOfNodesSorted;
    }

    topologicalSortHelper(i, visited, stack){
        visited[i] = true;

        let j = 0;

        for(j=0; j < this.adjacentList[i].length; j++) {
            if(!visited[Number(this.adjacentList[i][j])]){
                this.topologicalSortHelper(Number(this.adjacentList[i][j]), visited, stack);
            }
        }
        stack.push(i);
    }
}

const myGraph = new Graph();

myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addEdge('3', '1');
myGraph.addEdge('2', '3');
myGraph.addEdge('4', '0');
myGraph.addEdge('4', '1');
myGraph.addEdge('5', '2');
myGraph.addEdge('5', '0');

console.log(myGraph.topologicalSort())
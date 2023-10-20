// Represent a graph in an adjacency matrix and as a list of nodes  

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
        this.adjacentMatrix = [];
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;

        let newArray = new Array(this.numberOfNodes).fill(0);

        for(let i = 0; i < this.numberOfNodes; i++){
            this.adjacentMatrix[i] = newArray;
        }
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);

        let array = [...this.adjacentMatrix[node1]];

        for(let i = 0; i < array.length; i++){
            if(i == node2){
                array[node2] = 1;
            }
        }

        this.adjacentMatrix[node1] = array;
        
        array = [...this.adjacentMatrix[node2]];

        for(let i = 0; i < array.length; i++){
            if(i == node1){
                array[node1] = 1;
            }
        }

        this.adjacentMatrix[node2] = array;
    }

}

const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addEdge('3', '1');
myGraph.addEdge('2', '3');
myGraph.addEdge('4', '0');
myGraph.addEdge('4', '1');
myGraph.addEdge('5', '2');
myGraph.addEdge('5', '0');

function linkedList(graph){
    let adjacentList = graph.adjacentList;
    let linkedListArray = new Array (graph.numberOfNodes);

    for(let node in adjacentList){
        let edge = adjacentList[node];

        let myLinkedList = new LinkedList(node);

        for(let vertex in edge){
            myLinkedList.append(edge[vertex]);
        }

        linkedListArray[node] = myLinkedList;
    }
    return linkedListArray;
}

let adjacentMatrixRepresentation = myGraph.adjacentMatrix;
let linkedListRepresentation = linkedList(myGraph);

console.log(adjacentMatrixRepresentation)
console.log(linkedListRepresentation);
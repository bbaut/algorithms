// Given the root of a tree, write a function that takes two numbers (n1 and n2). Search for these two numbers 
// within the tree and indicate if they are found at the same depth

class Node {
    constructor(item){
        this.value = item;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode
        }
        else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    //Left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    //Right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

function searchTwoNumbers(node, n1, n2){

    let depthN1 = depthOfNode(node, n1);
    let depthN2 = depthOfNode(node, n2);

    if(depthN1 === depthN2){
        return true;
    }

    return false;
}

function depthOfNode(node, number){
    let currentNode = node;

    if(currentNode === null){
        return null;
    }

    let distance = 0;
    let queue = [];

    queue.push(currentNode);

    while(queue.length > 0){
        let queueLength = queue.length;

        for(let i = 0; i < queueLength; i++) {
            currentNode = queue.shift();

            if(currentNode.value === number){
                return distance;
            }

            if(currentNode.left) {
                queue.push(currentNode.left);
            }

            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        
        distance++;
    }

    return distance;
}

let number1 = 6 ;
let number2 = 15;

console.log(searchTwoNumbers(tree.root, number1, number2));
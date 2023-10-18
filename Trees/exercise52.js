// Given a binary tree, print out the nodes in order of top to bottom, and left to right;

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

function traverse(node, array = []){
    array.push(node.value);
    tree.left = node.left === null ? null : traverse(node.left, array);
    tree.right = node.right === null ? null : traverse(node.right, array);
    return array;
}

console.log(traverse(tree.root));

function searchTwoNumbers(node, n1, n2){
    let currentNode = node;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while(queue.length > 0){
        currentNode = queue.shift();
        console.log(currentNode)
        list.push(currentNode.value);
        // if(currentNode.value === n1){
        //     break;
        // }
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

let number1 = 6 ;
let number2 = 15;

console.log(searchTwoNumbers(tree.root, number1, number2));


//          9
//      4       20
//   1   6   15     170
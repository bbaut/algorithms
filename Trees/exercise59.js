//Implement the rebalancing algorithm for an AVL tree

class Node { 
    constructor(value) { 
        this.value = value; 
        this.height = 1; 
        this.left = null; 
        this.right = null; 
    } 
  } 

class AVLTree { 
    constructor() { 
        this.root = null; 
    } 

    height(node) { 
        if (node == null) {
            return 0; 
        }
        return node.height; 
    } 

    max(a, b) { 
        return a > b ? a : b; 
    } 

    rightRotate(node) { 
        let newNode = node.left; 
        let tempNode = newNode.right; 

        newNode.right = node; 
        node.left = tempNode; 

        node.height = this.max(this.height(node.left), this.height(node.right)) + 1; 
        newNode.height = this.max(this.height(newNode.left), this.height(newNode.right)) + 1; 

        return newNode; 
    } 

    leftRotate(node) { 
        let newNode = node.right; 
        let tempNode = newNode.left; 

        newNode.left = node; 
        node.right = tempNode; 

        node.height = this.max(this.height(node.left), this.height(node.right)) + 1; 
        newNode.height = this.max(this.height(newNode.left), this.height(newNode.right)) + 1; 

        return newNode; 
    } 

    getBalance(node) { 
        if (node === null) {
            return 0; 
        }

        return this.height(node.left) - this.height(node.right); 
    } 

    insert(node, value) { 
        if (node == null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insert(node.left, value); 
        }
        else if (value > node.value) {
            node.right = this.insert(node.right, value); 
        }
        else { 
            return node; 
        }

        node.height = 1 + this.max(this.height(node.left), this.height(node.right)); 

        let balance = this.getBalance(node); 

        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node); 
        }

        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node); 
        }

        if (balance > 1 && value > node.left.value) { 
            node.left = this.leftRotate(node.left); 
            return this.rightRotate(node); 
        } 

        if (balance < -1 && value < node.right.value) { 
            node.right = this.rightRotate(node.right); 
            return this.leftRotate(node); 
        } 

        return node; 
    } 
} 



let tree = new AVLTree(); 
let treeRoot = tree.root;

treeRoot = tree.insert(treeRoot, 1); 
treeRoot = tree.insert(treeRoot, 2); 
treeRoot = tree.insert(treeRoot, 3); 
treeRoot = tree.insert(treeRoot, 4); 
treeRoot = tree.insert(treeRoot, 5); 
treeRoot = tree.insert(treeRoot, 9); 
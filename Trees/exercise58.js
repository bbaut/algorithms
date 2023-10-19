//Implement searching in an AVL tree

class Node {
    constructor(item){
        this.value = item;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor(){
        this.root = null;
    }

    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    getHeight(node) {
        let height = 0;
        if(node == null){
            height -1;
        }
        else {
            height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        }
        return height;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        }
        else {
            inserHelper(this.root, newNode)
        }
    }

    inserHelper(root, node) {
        if(root === null) {
            root = node;
        }
        else if (node.value < root.value){
            root.left = inserHelper(this.root, node);
            if(root.left !== null && this.getBalanceFactor(root) > 1) {
                if (node.value > root.left.value) {
                    root = 
                }
            }
        }
    }
}
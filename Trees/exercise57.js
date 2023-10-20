// Implement insert and delete operations on an BST;

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

    delete(value) {
        if(!this.root){
            return false
        }

        let currentNode = this.root;
        let parentNode = null;

        while(currentNode) {
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                if (currentNode.right === null) {
                    if(parentNode === null) {
                        this.root = currentNode.left;
                    }
                    else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        }
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null) {
                        this.root = currentNode.right;
                    }
                    else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        }
                        else if (currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                else {
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left != null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    }
                    else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        }
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
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

tree.delete(20)

console.log(tree.root);
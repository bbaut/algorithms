// Lowest Common Ancestor (LCA)

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

function lowestCommonAncestor(root, number1, number2) {
    while(root != null){
        if(root.value > number1 && root.value > number2) {
            root = root.left;
        }
        else if (root.value < number1 && root.value < number2) {
            root = root.right;
        }
        else {
            break;
        }
    }
    return root; 
}

console.log(lowestCommonAncestor(tree.root, 1, 6))

//          9
//      4       20
//   1   6   15     170
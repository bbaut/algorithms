// Determine if a tree is mirrored

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

const originalTree = new BinarySearchTree();
originalTree.insert(9);
originalTree.insert(4);
originalTree.insert(6);
originalTree.insert(20);
originalTree.insert(170);
originalTree.insert(15);
originalTree.insert(1);

const mirroredTree = new BinarySearchTree();
mirroredTree.root = new Node(9);
mirroredTree.root.left = new Node(20);
mirroredTree.root.right = new Node(4);
mirroredTree.root.left.left = new Node(170);
mirroredTree.root.left.right = new Node(15);
mirroredTree.root.right.left = new Node(6);
mirroredTree.root.right.right = new Node(1);


function treeIsMirrored (originalTree, mirroredTree) {

    let mirroredOriginalTree = mirror(originalTree.root);

    let listMirroredOriginalTree = traverseBottomTopLeftRight(mirroredOriginalTree);
    let listMirroredTree = traverseBottomTopLeftRight(mirroredTree.root);

    if(listMirroredOriginalTree.length !== listMirroredTree.length){
        return false;
    }

    for(let i = 0; i < listMirroredOriginalTree.length; i++) {
        if(listMirroredOriginalTree[i] !== listMirroredTree[i]){
            return false;
        }
    }

    return true;
}

function mirror(node) {
    if(node === null) {
        return node;
    }

    let left = mirror(node.left);
    let right = mirror(node.right);

    node.left = right;
    node.right = left;

    return node;
}

function traverseBottomTopLeftRight(node, array = []){
    if (node === null){
        return;
    }

    traverseBottomTopLeftRight(node.left, array);
    array.push(node.value);

    traverseBottomTopLeftRight(node.right, array);
    return array;
}

console.log(treeIsMirrored(originalTree, mirroredTree));
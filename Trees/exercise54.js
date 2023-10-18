// Given a dictionary input, output a tree structure representing the dictionary

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
}

function convertToTree(dictionary){
    const tree = new BinarySearchTree();
    let stack = [];

    for(let i = 0; i < 9; i++){
        let value = dictionary[i].age;

        const newNode = new Node(value);

        if(tree.root === null) {
            tree.root = newNode
        }
        else {
            let currentNode = tree.root;
            while(true){
                if(dictionary[i].ageParent === currentNode.value){
                    if(currentNode.right){                       
                        if (currentNode.right.value < newNode.value){
                            currentNode.left = currentNode.right;
                            currentNode.right = newNode;
                        }
                        else {
                            currentNode.left = newNode;
                        }
                    }
                    else {
                        currentNode.right = newNode;
                    }
                    break;
                }
                else if (dictionary[i].ageParent === null){
                    newNode.right = currentNode;
                    tree.root = newNode;
                    break;
                }
                else {
                    let parentNode = nodeExists(currentNode, dictionary[i].ageParent)
                    if(parentNode){
                        currentNode = parentNode;
                    }
                    else{
                        stack.push(dictionary[i]);
                        break;
                    }
                }
            }
        }
    }

    while(stack.length > 0){
        let dictionaryElement = stack.pop();
        let value = dictionaryElement.age;

        const newNode = new Node(value);
        let currentNode = tree.root;

        while(true){
            if(dictionaryElement.ageParent === currentNode.value){
                if(currentNode.right){                       
                    if (currentNode.right.value < newNode.value){
                        currentNode.left = currentNode.right;
                        currentNode.right = newNode;
                    }
                    else {
                        currentNode.left = newNode;
                    }
                }
                else {
                    currentNode.right = newNode;
                }
                break;
            }
            else if (dictionaryElement.ageParent === null){
                newNode.right = currentNode;
                tree.root = newNode;
                break;
            }
            else {
                let parentNode = nodeExists(currentNode, dictionaryElement.ageParent)
                if(parentNode){
                    currentNode = parentNode;
                }
                else{
                    stack.push(dictionaryElement);
                    break;
                }
            }
        }
    }

    return tree;
}

function nodeExists(node, key){
    if(node == null) {
        return false;
    }

    if (node.value == key) {
        return node;
    }

    let res1 = nodeExists(node.left, key);
    if (res1){
        return res1;
    }

    let res2 = nodeExists(node.right, key);

    return res2;
}

let dictionary = [
    {
        "age": 67,
        "ageParent": 89,
    },
    {
        "age": 30,
        "ageParent": 60,
    },
    {
        "age": 15,
        "ageParent": 40,
    },
    {
        "age": 89,
        "ageParent": null,
    },
    {
        "age": 60,
        "ageParent": 89,
    },
    {
        "age": 39,
        "ageParent": 67,
    },
    {
        "age": 32,
        "ageParent": 60,
    },
    {
        "age": 40,
        "ageParent": 67,
    },
    {
        "age": 21,
        "ageParent": 40,
    },
]

console.log(convertToTree(dictionary));
//Implement searching in an AVL tree

let AVLObject = {
    "value":4,
    "height":3,
    "left": {
        "value":2,
        "height":2,
        "left": {
            "value":1,
            "height":1,
            "left":null,
            "right":null
        },
    "right": {
        "value":3,
        "height":1,
        "left":null,
        "right":null
        }
    },
    "right": {
        "value":5,
        "height":2,
        "left":null,
        "right": {
            "value":9,
            "height":1,
            "left":null,
            "right":null
        }
    }
} 


function searchInAVL(node, number) {
    if (node == null){
        return false;
    }
    else if (node.value === number){
        return true;
    }
    else if (node.value >= number) {
        let value = searchInAVL(node.left, number);
        return value;
    }
    else {
        let value = searchInAVL(node.right, number);
        return value;
    }
}

let number = 1 ;
console.log(searchInAVL(AVLstring, number));
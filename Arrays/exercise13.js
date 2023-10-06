function flattenAnArrayIterative(array) {
    let arrayFlattened = [];
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            arrayFlattened.push(array[i][j]);
        }
    }

    return arrayFlattened;
}

function flattenAnArrayRecursive(array) {
    let arrayFlattened = [];
    let innerArray = [];

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "number"){
            arrayFlattened.push(array[i]);
        }
        else {
            innerArray = flattenAnArrayRecursive(array[i]);
            arrayFlattened = [...arrayFlattened, ...innerArray];
        }
    }
    return arrayFlattened;
}

const array = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];

console.log(flattenAnArrayIterative(array));
console.log(flattenAnArrayRecursive(array));
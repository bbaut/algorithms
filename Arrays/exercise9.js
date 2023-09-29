// Given an array with values ranging from 0 to n-1, swap each array location with the value of the nth position with a[a[n]]
//Example: 
//  [4,3,0,1,2] INPUT
//0 [2,3,0,1,4]
//1 [2,1,0,3,4]
//2 [0,1,2,3,4]
//3 [0,1,2,3,4]
//4 [0,1,2,3,4]

function swapPositions(array) {
    for(let i = 0; i < array.length; i++){
        let pivot = array[i];

        array[i] = array[pivot];
        array[pivot] = pivot;
    }
    return array;
}

let array = [4,3,0,1,2];

console.log(swapPositions(array));
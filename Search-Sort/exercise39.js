// Find the 2nd largest number

function largestNum(array, kthNumber) {
    if(kthNumber < 1 || kthNumber > array.length) {
        return null;
    }
    let sortedArray = bubbleSort(array);
    return sortedArray[array.length - kthNumber];
}

function bubbleSort (array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

let arrayNumbers = [2,3,67,688,12,67,82,8,9,7];

console.log(largestNum(arrayNumbers, 3));
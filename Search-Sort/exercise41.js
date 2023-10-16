// Find the kth largest numbers in a unsorted list 

function largestNum(array, kthNumbers) {
    if(kthNumbers < 1) {
        return array;
    }

    if(kthNumbers > array.length){
        kthNumbers = array.length;
    }

    let arrayLargestNums = [];

    let sortedArray = bubbleSort(array);

    for(let i = array.length - kthNumbers; i < array.length; i++){
        arrayLargestNums.push(sortedArray[i]);
    }
    
    return arrayLargestNums;
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

let arrayNumbers = [2,3,69,688,12,67,82,8,9,7];

console.log(largestNum(arrayNumbers, 9));
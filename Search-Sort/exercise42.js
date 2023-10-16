// Given a set of numbers of size N-1 whose values range from 1 to N, finding the missing number

function findTheMissingValue(array) {
    let tempObject = {};

    for(i=0; i<= array.length; i++){
        tempObject[i+1] = false;
    }

    for(i=0; i< array.length; i++){
        if(!tempObject[array[i]]){
            tempObject[array[i]] = true;
        }
    }

    for(i=0; i<= array.length; i++){
        if(!tempObject[i+1]){
            return i+1;
        }
    }

}

const setOfNumbers = [1,2,3,4,5,10,7,8,9];

console.log(findTheMissingValue(setOfNumbers));
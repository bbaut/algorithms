//Given two arrays of single-digit numbers, create a function that will add them and produce the result in the same format as the inputs.
//Example a=[9,9], b=[1] so o= [1,0,0]

function add(array1, array2) {
    let arraySums = [];
    let objectSums;
    let k = 0;
    let variable = 0;

    if(array1.length >= array2.length) {
        objectSums = objectWithDigits(array1, array2);
    }
    else {
        objectSums = objectWithDigits(array2, array1);
    }

    while(variable !== undefined){
        arraySums[k] = objectSums[k];
        k++;
        variable = objectSums[k];
    }
    return arraySums;
}

function objectWithDigits(arr1, arr2){
    let objectDigits = {};
    let lengthDifference = arr1.length - arr2.length;

    for (let i = arr1.length - 1; i >= 0; i--) {
        let sum = 0;
        if(arr2[i-lengthDifference] === undefined){
            sum = arr1[i];
            if(sum >= 10) {
                sum = sum%10;
                arr1[i-1] = arr1[i-1] + 1;
                if(i === 0) {
                    objectDigits[i] = 1;
                }
            }
        }
        else {
            sum = arr1[i] + arr2[i-lengthDifference];
            if(sum >= 10) {
                sum = sum%10;
                arr1[i-1] = arr1[i-1] + 1;
                if(i === 0) {
                    objectDigits[i] = 1;
                }
            }
        }
        objectDigits[i+1] = sum;
    }
    return objectDigits;
}

// const array1 = [9,8,7,6]
// const array2 = [1,3,4]

// const array1 = [9,9]
// const array2 = [1]

// const array1 = [9,9]
// const array2 = [9]

const array1 = [9]
const array2 = [9,9]

console.log(add(array1, array2))
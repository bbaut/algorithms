// Find the majority number in an array;

function mahorityNumber(array) {
    let objectNumbersTimes = {};
    let sortArrayOfNumbers = [];

    for(let i = 0; i < array.length; i++){
        objectNumbersTimes[array[i]] = objectNumbersTimes[array[i]] === undefined ? 1 : objectNumbersTimes[array[i]] + 1;
    }

    for (let key in objectNumbersTimes) {
        sortArrayOfNumbers.push([key, objectNumbersTimes[key]]);
    }

    sortArrayOfNumbers.sort(function(a, b) {
        return b[1] - a[1];
    });

    return Number(sortArrayOfNumbers[0][0]);
}

const listNumbers = [1,4,7,83,2,6,8,2,8,23,78,8,2,22,4,56,2,3,57,1,2,4,3];

console.log(mahorityNumber(listNumbers));
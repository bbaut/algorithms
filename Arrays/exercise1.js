// Maximum value of an array without using loops

function maxValue(array) {
    let lastValue = array[array.length-1];
    let pivotNumber = lastValue;
    let hasGraterValue = true;

    while (hasGraterValue === true) {
        hasGraterValue = array.some(number => {
            pivotNumber = number;
            return number > lastValue
        });
        if(hasGraterValue === false){
            break;
        }
        lastValue = pivotNumber;
    }
    return(lastValue)
}

let array = [1,2,3,4,5,23,4,345,12,34,5,1,1,3,78,8,9,6,45,4,5,788,9];

console.log(maxValue(array))
// Find the largest run of at most two distinct numbers
// ex:

// Input: "1212223311212223"
// Output: "1121222"

// Input: "111"
// Output: "111"

function largestRun(numbers){
    let largestRun = "";
    let runSize = 0;

    let positionStart = 0;
    let positionTemp = 0;

    while (positionStart < numbers.length - 1){

        let twoDistinctNums = [];
        let stringRun = "";

        for(let i = positionStart; i < numbers.length; i++){
            if(twoDistinctNums.length < 2 && !twoDistinctNums.includes(numbers[i])){
                twoDistinctNums.push(numbers[i]);
            }
            if(!twoDistinctNums.includes(numbers[i])){
                break;
            }
            if(numbers[i] != numbers[i-1]){
                positionTemp = i;
            }
            stringRun = stringRun + numbers[i];
        }

        positionStart = positionTemp;

        if(stringRun.length > runSize){
            runSize = stringRun.length;
            largestRun = stringRun;
        }
    }
        return largestRun;
}

const numbers = "1212223311212223";
console.log(largestRun(numbers));
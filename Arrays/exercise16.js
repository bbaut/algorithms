//Given an array of numbers of length N, find the index of that array that balances the left and right sum

function sumBalancer(numbersArray) {
    let index = numbersArray.length-2;
    let flag = false;

    for(let i = 0; i < numbersArray.length; i++){
        let rightSum = 0;
        let leftSum = 0;

        for(let j = 0; j < index + 1; j++){
            rightSum = rightSum + numbersArray[j];
        }

        for(let j = index+1 ; j < numbersArray.length; j++){
            leftSum = leftSum + numbersArray[j];
        }

        if(rightSum === leftSum){
            flag = true;
            break;
        }
        else {
            index = index - 1;
        }
    }

    flag ? index : index = -1;
    return index;
}

let array = [1,2,3,4,9,9,2,7,10,13]

console.log(sumBalancer(array));

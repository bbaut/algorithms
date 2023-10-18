// Find the consecutive sequence of number that sums up to a target number

function consecutiveNums(listNumbers, target){
    for(let i = 0; i < listNumbers.length; i++){
        let sum = listNumbers[i];
        let array = [listNumbers[i]];

        for(let j = i+1; j < listNumbers.length; j++){
            sum = sum + listNumbers[j];
            array.push(listNumbers[j]);

            if(sum === target){
                return array;
            }
            
            if(sum > target){
                break;
            }
        }
    }
    return false;
}

const listNumbers = [1,4,7,83,2,6,8,2,8,23,78,8,2,22,4,56]
const target = 125;

console.log(consecutiveNums(listNumbers, target))
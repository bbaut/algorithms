// There is a set of N fish that are of varying sizes (no two are alike) and travel in one of two 
// possible directions. Initially all fish are alive. When the fish meet each other, the larger fish will eat the smaller fish. 
// Determine how many fish will be alive at the end of any given arrangement.

// example:
// -------------------------------------------------------------
//       <-2   6->    1->     <-7  <-5   4->   <-3
// -------------------------------------------------------------

// 4 fish remain


function fishAlive (fishArray) {
    let array = [];
    let i = 0;
    let count = 0;

    while(i < fishArray.length){
        if(fishArray[i] > 0 && fishArray[i+1] < 0){
            if(fishArray[i] > Math.abs(fishArray[i+1])){
                array.push(fishArray[i])
                i = i + 2; 
            }
            else {
                array.push(fishArray[i+1])
                i = i +2;
            }
            count++;
        }
        else {
            array.push(fishArray[i])
            i++;
        }
    }

    if(count === 0) {
        return array;
    }
    else {
        return fishAlive(array);
    }
}

const fishArray = [-2, 6, 1, -7, -5, 4, -3];

console.log(fishAlive(fishArray));
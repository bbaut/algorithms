// Merge two sorted arrays where one has enough space at the end for the other

function mergeArrays (array1, array2) {
    let lengthArray1 = array1.length;
    let lengthArray2 = array2.length;
    let realLengthArray1 = lengthArray1 - array2.length + 1;
    let r = realLengthArray1 - 1;
    let lastValueArray1 = array1[r-1];

    for (let i = 0; i < lengthArray2; i++) {
        let value = array2.pop();
        if(value > lastValueArray1){
            array1.splice(r, 0, value);
            array1.pop();
            r++;
            lastValueArray1 = value;
        }
        else {
            for (let j = r-1 ; j >= 0; j--){
                if(array1[j] < value){
                    array1.splice(j+1, 0, value);
                    array1.pop();
                    r++;
                    lastValueArray1 = value;
                    break;
                }
                else if( j == 0 && array1[j] > value){
                    array1.splice(j, 0, value);
                    array1.pop();
                    r++;
                    lastValueArray1 = value;
                    break;
                }
            }
        }
    }
    return (array1)
}

const array1 = [1,3,5,7,9,11, , , , , ,]
const array2 = [2,4,6,8,10]

console.log(mergeArrays(array1, array2))
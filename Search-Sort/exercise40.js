// Find the "2nd" largest number in a stream

function randomNumbers() {
    function _stream(top = 1000, bottom = 1) {
        return {
            value: Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom,
            next() {
            return _stream(top = 1000, bottom = 1);
            }
        };
    }
   
    return () => _stream(top = 1000, bottom = 1);
}
   
const randoms = randomNumbers();
  
function take(n, str) {
    function _take(n, str, accum) {
        if (n === 0) {
            return accum;
        }
    
        const { value, next } = str();
    
        return _take(n - 1, next, accum.concat(value));
    }
   
    return _take(n, str, []);
}

const oneHundredRandom = take(100, randoms);

function largestNum(array, kthNumber) {
    if(kthNumber < 1 || kthNumber > array.length) {
        return null;
    }
    let sortedArray = bubbleSort(array);
    return sortedArray[array.length - kthNumber];
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

console.log(largestNum(oneHundredRandom, 2));
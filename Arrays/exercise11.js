//Write a function that will reverse N sized blocks of an array

function reverseBlocksArray (array, n) {
    if (n <= 0) {
        return null;
    }

    let map = {}; 
    let arrayWithMaps = [];
    let parts = Math.floor(array.length/n);
    let counter = 1;

    for(let i = 1; i <= array.length; i++){
        map[i-(counter*n) + n] = array[i-1];
        if(i === n*counter){
            counter++;
            arrayWithMaps.push(map)
            map = {}; 
        }

        if(i === array.length){
            arrayWithMaps.push(map)
            counter = 1;
        }
    }
    for(let i = 1; i <= array.length; i++){
        if(counter - 1 >= parts){
            array[i-1] = arrayWithMaps[counter-1][array.length-i+1]
        }
        else {
            array[i-1] = arrayWithMaps[counter-1][(counter*n) - i + 1]
        }
        if(i === n*counter){
            counter++;
        }
    }
    return array
}

const array = [1,2,3,4,5,6,7,8,9,10];
// const array = [30,1,6,7,8,100,2,11,9,10];
const n = 6

console.log(reverseBlocksArray(array, n))
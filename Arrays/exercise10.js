//Shuffle an array

function shuffle(array){
    for(let i = 0; i < array.length; i++){
        let random = Math.floor(Math.random()*(array.length-1));
        let pivot = array[i];

        array[i] = array[random];
        array[random] = pivot;
    }
    return array;
}

let array = [1,2,3,4,5,6,7,8,9];

console.log(shuffle(array));
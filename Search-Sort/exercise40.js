// Find the "2nd" largest number in a stream

const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));

const getDataSeries = async () => {
    let numbers = [];
    let num = 0;
    let maxTimes = 6;
    for (let i = 0; i < maxTimes; i++) {
        await delay();
        const res = await fetch(`https://dummyjson.com/products/${i+1}`);
        const product = await res.json();
        numbers.push(product.price);
        num = largestNum(numbers, 2);
        if(i === maxTimes-1){
            console.log(num);
        }
    }
};

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

getDataSeries();
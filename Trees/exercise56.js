// Given an input stream, detect when the series of characters correspond to a word found in a word array

function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomNumbers() {
    function _stream(n) {
        return {
            value: makeid(n),
            next() {
            return _stream(n);
            }
        };
    }
   
    return () => _stream(1);
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

const oneHundredRandom = take(3, randoms);
console.log(oneHundredRandom)
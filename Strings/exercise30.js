// Reversing the odd positioned words of a string

function reverseOddWords (string) {
    const arrayWords = string.split(" ");
    let arrayOddWords = [];
    let stringOddWords = "";
    let stringReverse = "";

    for(let i = 0; i < arrayWords.length; i++){
        if(i%2 != 0) {
            arrayOddWords.push(arrayWords[i]);
        }
    }

    for(let i = 0; i < arrayOddWords.length; i++){
        if(i>0){
            stringOddWords = stringOddWords + " ";
        }
        stringOddWords = stringOddWords + arrayOddWords[i];
    }

    for (let i = 0; i < stringOddWords.length; i++){
        stringReverse = stringReverse + stringOddWords[stringOddWords.length-i-1];
    }

    let arrayStringOddReverse = stringReverse.split(" ");
    stringReverse = "";

    for(let i = 0; i < arrayWords.length; i++){
        if(i>0){
            stringReverse = stringReverse + " ";
        }

        if(i%2 != 0) {
            stringReverse = stringReverse + arrayStringOddReverse[arrayStringOddReverse.length-1];
            arrayStringOddReverse.pop();
        }
        else{
            stringReverse = stringReverse + arrayWords[i];
        }
    }

    return stringReverse;
}

const string = "today is rainning a lot and i dont know why";

console.log(reverseOddWords(string));
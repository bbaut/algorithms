// Given a string of lowercase letters, find a string that contains all unique characters and has the lowest lexicographic value possible

function substring(string) {
    let arraySubstrings = [];
    let substring = "";
    let minimumLexgraphValue = 0;
    let flag = false;
    
    for(let i = 0; i < string.length; i++){
        let substr = string[i];
        for(let j =i +1; j < string.length; j++){
            if(substr.includes(string[j])){
                break;
            }
            substr = substr + string[j];
            if(j === string.length-1){
                flag = true;
            }
        }
        arraySubstrings.push(substr);
        if(flag) break;
    }


    for(let i = 0; i < arraySubstrings.length; i++){
        let lexicographValue = lexicographicValue(arraySubstrings[i]);
        if(i === 0){
            minimumLexgraphValue = lexicographValue;
        }

        if (lexicographValue < minimumLexgraphValue) {
            substring = arraySubstrings[i];
            minimumLexgraphValue = lexicographValue;
        }
    }

    return substring;
}

function lexicographicValue(string){
    let value = 1;

    for (let i = 0; i < string.length; i++) {
        let count = 0;
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] > string[j]) {
                count++;
            }
        }
        value += count * factorialOfNumber(string.length - i - 1);
    }
    return value;
}

function factorialOfNumber(number){
    if(number<=1){
        return 1;
    }
    return number * factorialOfNumber(number-1);
}



const string = "sdfasfokbgs";
console.log(substring(string))
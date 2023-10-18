// Given A, B, and C as inputs, determine if C can be formed by an interleaved combination of the characters of A and B. Example: 
// A = "abcd" 
// B = "abcd" 
// C = "aabcbcdd" 

function isInterleavedCombination(s1, s2, s3){

    if(s3.length != s1.length + s2.length){
        return false;
    }

    let stringArray = new Array(s3.length);
    let arrayWithAllCombinations = [];

    interleavedCombination(s1, s2, stringArray, s1.length, s2.length, 0, arrayWithAllCombinations);

    if(arrayWithAllCombinations.includes(s3)){
        return true;
    }
    return false;
}

function interleavedCombination(s1, s2, stringArray, s1Length, s2Length, i, array){
    if(s1Length === 0 && s2Length === 0){
        array.push(stringArray.join(""));
    }

    if(s1Length != 0) {
        stringArray[i] = s1[0];
        interleavedCombination(s1.slice(1), s2, stringArray, s1Length-1, s2Length, i+1, array);
    }

    if(s2Length != 0) {
        stringArray[i] = s2[0];
        interleavedCombination(s1, s2.slice(1), stringArray, s1Length, s2Length-1, i+1, array);
    }
}

const A = "abcd";
const B = "abcd";
const C = "aabcbcdd";

console.log(isInterleavedCombination(A,B,C))
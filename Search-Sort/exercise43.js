// Longest common subsequence

function getLCS (string1, string2) {
    let string1Length = string1.length;
    let string2Length = string2.length;
    
    return lcs(string1, string2, string1Length, string2Length);
}

function lcs(string1, string2, length1, length2){
    if(length1 === 0 || length2 === 0){
        return null;
    }

    if(string1[length1-1] == string2[length2-1]){
        return 1 + lcs(string1, string2,length1-1,length2-1);
    }
    else {
        return max(lcs(string1, string2,length1,length2-1), lcs(string1, string2,length1-1,length2))
    }
}

function max(a,b) 
{ 
    return (a > b) ? a : b; 
} 

let string1 = "tasoweajspfs";
let string2 = "wespfñ";

console.log(getLCS(string1,string2));
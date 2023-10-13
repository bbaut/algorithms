//Determine if a string is a permutation of another 

function isPermutation(string1, string2){

    const string1ws = string1.replace(/\s/g, "")
    const string2ws = string2.replace(/\s/g, "")

    let lengthString1 = string1ws.length;
    let lengthString2 = string2ws.length;

    if( lengthString1 != lengthString2) {
        return false;
    }

    let arrayString1 = string1ws.split("");
    let arrayString2 = string2ws.split("");

    arrayString1.sort(function(a,b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a == b) return 0;
        return a < b ? -1 : 1;
    });

    arrayString2.sort(function(a,b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a == b) return 0;
        return a < b ? -1 : 1;
    });

    for (let i = 0; i < arrayString1.length; i++) {
        if (arrayString1[i].toLowerCase() != arrayString2[i].toLowerCase()){
            return false;
        }
    }

    return true;
}

const string1 = "G ood";
const string2 = "dogo";

console.log(isPermutation(string1, string2))
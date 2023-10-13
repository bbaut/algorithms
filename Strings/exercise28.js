// Determine if a string is a rotation of another

function rotationString(string1, string2){
    if(string1.length != string2.length){
        return false;
    }

    let firstLetter = string2[0];
    let indexFirstLetter = string1.indexOf(firstLetter);

    if(indexFirstLetter === -1 || indexFirstLetter === 0){
        return false;
    }
    
    for(let i = 1; i< string2.length; i++){
        if(indexFirstLetter + i > string1.length-1){
            if(string2[i] != string1[i-string1.length+indexFirstLetter]){
                return false;
            }
        }
        else {
            if(string2[i] != string1[indexFirstLetter+i]){
                return false;
            }
        }
    }
    return true;
}

const string1 = "abcd";
const string2 = "dabc";

console.log(rotationString(string1, string2));
//Finding anagrams

function findAnagram(string1, string2){
    
    if(string1.length != string2.length){
        return false;
    }

    let objectString1 = {};

    for (let i = 0; i < string1.length; i++) {
        objectString1[i] = false;
    }

    for (let i = 0; i < string2.length; i++) {
        for (let j = 0; j < string1.length; j++) {
            if(string2[i] === string1[j]){
                if(objectString1[j] === false){
                    objectString1[j] = true;
                    break;
                }
            }
        }
    }
    
    for (let i = 0; i < string1.length; i++) {
        if(objectString1[i] === false){
            return false;
        }
    }

    return true;
}

const string1 = "silent";
const string2 = "listen";

console.log(findAnagram(string1, string2));
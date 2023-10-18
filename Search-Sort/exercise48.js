//Find the smallest substring in S that contains all the characters in the string T. T is a string of unique characters.

function searchSubstring (stringS, stringT) {
    let string="";
    let characters = {};
    let substrings = [];
    let characterCount = 0;
    let allCharacters = true;
    
    for(let i=0; i<stringT.length; i++){
        characters[stringT[i]] = false;
    }

    for(let i=0; i<=stringS.length; i++){
        if(characters[stringS[i]] === undefined){
            if(characters[stringS[i-1]] != undefined){
                for (let character in characters) {
                    if(!characters[character]){
                        allCharacters = false;
                    }
                    characters[character] = false;
                }

                if(allCharacters){
                    substrings.push([string, characterCount])
                }

                string = "";
                characterCount = 0;
                allCharacters = true;
            }
        }
        else {
            characters[stringS[i]] = true;
            string = string + stringS[i];
            characterCount++;
        }
    }

    substrings.sort(function(a, b) {
        return a[1] - b[1];
    });

    return substrings[0][0];
}

const stringS = "agfssisefgpodsfgsies";
const stringT = "eis";

console.log(searchSubstring(stringS, stringT))
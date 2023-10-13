// Find the distance between two strings (Levenshtein)

function levenshteinDistance (string1, string2) {
    let lengthS1 = string1.length;
    let lengthS2 = string2.length;
    let matrix = new Array(lengthS1+1);

    for(let i = 0; i <= lengthS1; i++){
        matrix[i] = [];
        matrix[i][0] = i;
    }

    for(let i = 0; i <= lengthS2; i++){
        matrix[0][i] = i;
    }

    for(let i = 1; i <= lengthS1; i++){
        for(let j = 1; j <= lengthS2; j++){
            if(string1[i-1] === string2[j-1]){
                matrix[i][j] = matrix[i-1][j-1];
            }
            else {
                matrix[i][j] = 1 + Math.min(matrix[i][j-1], Math.min(matrix[i-1][j], matrix[i-1][j-1]))
            }
        }
    }
    return matrix[lengthS1][lengthS2]
}

string1 = "kel";
string2 = "hello";

console.log(levenshteinDistance(string1, string2));
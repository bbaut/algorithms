//Rotate a matrix of numbers by 90 deg

function rotate90d(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    let emptyMatrix = new Array(rows);

    for(let i = 0; i < rows; i++){
        emptyMatrix[i] = new Array(columns);
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            emptyMatrix[j][i] = matrix[rows-i-1][j];
        }
    }

    return emptyMatrix;
}

const matrix = [
    [1, 1, 0, 0, 1], 
    [1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0], 
    [1, 1, 1, 0, 1],
];

console.log(rotate90d(matrix));
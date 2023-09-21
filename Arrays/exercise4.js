//Find groups of 1's in an MxN matrix

function findGroups (matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    let booleanMatrix = new Array(rows);

    for(let i = 0; i < rows; i++){
        booleanMatrix[i] = new Array(columns);
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            booleanMatrix[i][j] = false;
        }
    }
    
    let count = 0;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if (matrix[i][j] == 1 && !booleanMatrix[i][j]){
                DFS(matrix, i, j, booleanMatrix)
                count++;
            }
        }
    }
    return count;
}

function DFS (matrix, row, column, booleanMatrix) {
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    booleanMatrix[row][column] = true;

    for(let k = 0; k < 8; k++) {
        if( isSafe(matrix, row + rowNbr[k], column+ colNbr[k], booleanMatrix)){
            DFS(matrix, row+ rowNbr[k], column+ colNbr[k], booleanMatrix)
        }
    }
}

function isSafe(matrix, row, column, booleanMatrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    return (row >= 0) && (row < rows) && (column >= 0) && (column < columns) && (matrix[row][column] === 1 && !booleanMatrix[row][column])
}

const matrix = [
    [1, 1, 0, 0, 1], 
    [1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0], 
    [1, 1, 1, 0, 1],
];

console.log(findGroups(matrix))

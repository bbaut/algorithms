// Given m*n matrix, if any element is zero, make that column and row all zeroes

function rowAndColumnZeroes(matrix){
    const rows = matrix.length;
    const columns = matrix[0].length;
    const arrayRowsColumns = [];

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){            
            if (matrix[i][j] === 0) {
                let object = {
                        row: i,
                        column: j
                  }
                arrayRowsColumns.push(object)
            }
        }
    }

    if(arrayRowsColumns){
        for (let i = 0; i < arrayRowsColumns.length; i++) {
            let rowToMakeZero = arrayRowsColumns[i].row;
            let columnToMakeZero = arrayRowsColumns[i].column;

            for(let j= 0; j<columns; j++){
                matrix[rowToMakeZero][j] = 0;
            }

            for(let j = 0; j<rows; j++){
                matrix[j][columnToMakeZero] = 0;
            }
        }
    }
    
    return matrix
}

const matrix = [
    [1,2,3,7], 
    [3,4,5,8], 
    [7,5,0,9]
];

console.log(rowAndColumnZeroes(matrix));
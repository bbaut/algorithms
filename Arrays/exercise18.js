//Optimize storing a sparse matrix

function optimizeSparseMatrix (matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let size = 0; 

    for(let i = 0; i < rows; i++){
        for(let j = 0; j <columns; j++){
            if(matrix[i][j] != 0){
                size++;
            }
        }
    }

    let matrixArragement = new Array(3);

    for(let i=0; i < 3; i++){
        matrixArragement[i] = new Array(size)
    }

    let k = 0;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j <columns; j++){
            if(matrix[i][j] != 0){
                matrixArragement[0][k] = i;
                matrixArragement[1][k] = j;
                matrixArragement[2][k] = matrix[i][j];
                k++;
            }
        }
    }

    return matrixArragement
}

const sparseMatrix = [
    [ 1, 2, 0, 0 ],
    [ 7, 0, 0, 0 ],
    [ 0, 0, 4, 5 ],
    [ 0, 0, 3, 6 ]
]

console.log(optimizeSparseMatrix(sparseMatrix))
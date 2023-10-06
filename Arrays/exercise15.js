//Given an MxN matrix this is an ascending order both on rows and columns, create a search function

function searchElement(matrix, number) {
    let rows = matrix.length-1;
    let columns = matrix[0].length;

    let positionRow = -1;
    let positionColumn = -1;
    
    let l = 0;
    while (rows >= l){
        let middleRow = Math.floor((rows - l)/2) + l;

        if(matrix[middleRow].includes(number)){
            positionRow = middleRow;
        }

        if(matrix[middleRow][columns-1] > number){
            rows = middleRow - 1;
        }
        else {
            l = middleRow + 1; 
        }
    }
    
    if (positionRow === -1){
        return null;
    }

    l = 0;

    while (columns >= l){
        let middleColumns = Math.floor((columns - l)/2) + l;

        if (matrix[positionRow][middleColumns] == number){
            positionColumn = middleColumns;
        }

        if(matrix[positionRow][middleColumns] > number){
            columns = middleColumns - 1;
        }
        else {
            l = middleColumns + 1; 
        }
    }

    if (positionColumn === -1){
        return null;
    }
    else {
        return position = [positionRow, positionColumn];
    }
}

// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

const matrix = [
    [17,20,355],
    [456,5555,6543],
    [7567,8899,9932]
]

const element = 9932;

console.log(searchElement(matrix, element));
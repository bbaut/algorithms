function possibleMovements(matrix, path, start, end) {
    i = start[0]
    j = start[1]

    if (i == end[0] && j == end[1]){
        path.append(matrix[i][j])
        for (let i in path){
            console.log(i)
        }
        path.pop()
        return
    }

    if(i<0 || i>=end[0] || j <0 || j>=end[1]){
        return
    }

    path.append(matrix[i][j])
}

const matrix = [
    [1,  2,  3,  4,  5], 
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
];

const start = [1,1];
const end = [5,4];
const path = [];

console.log(possibleMovements(matrix, path, start, end))
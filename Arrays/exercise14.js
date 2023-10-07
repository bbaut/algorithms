function possibleMovements(matrix, start, end) {

    let steps = end[0]- start[0] + end[1]- start[1];
    let startPoint = matrix[start[0]][start[1]];
    let path = [];
    let countRight = 0;
    let countDown = 1;

    for(let i = 1; i <= 1; i++){
        path = [];
        path.push(startPoint)
        for(let j = 1; j <= steps; j++){
            
            //Right movement
            // console.log(start[1]+j)
            // console.log((end[1] + countRight  >= start[1]+j))
            // console.log(!(start[1]+j > end[1]))
            if (end[1] + countRight  >= start[1]+j){
                console.log(matrix[start[0]][start[1]+j])
                path.push(matrix[start[0]][start[1]+j]);
            }
            else {
                console.log(matrix[start[0] + countDown][end[1]])
                path.push(matrix[start[0] + countDown][end[1]]);
                countDown++;
            }
        }
        countRight++;
    }
    return path
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

console.log(possibleMovements(matrix, start, end))

// for(let i = 1; i <= 1; i++){
    //     path = [];
    //     path.push(startPoint)
    //     for(let j = 1; j <= steps; j++){
    //         //Right movement
    //         console.log(!(start[1]+j > end[i]))
    //         if (!start[1]+j > end[1]){
    //             path.push(matrix[start[0]][start[1]+j]);
    //         }
    //         else {
    //             path.push(matrix[start[0]+j][start[1]]);
    //         }
    //     }
    // }


    function possibleMovements(matrix, start, end) {

        let steps = end[0]- start[0] + end[1]- start[1];
        let startPoint = matrix[start[0]][start[1]];
        let path = [];
        let pathsArray = [];
        let countRight = 0;
        let countDown = 1;
    
        for(let i = 1; i <= 2; i++){
            path = [];
            path.push(startPoint)
            countDown=1;
            for(let j = 1; j <= steps; j++){
                console.log(countRight)
                console.log(countDown)
                //Right movement
                // console.log(start[1]+j)
                // console.log((end[1] + countRight  >= start[1]+j))
                // console.log(!(start[1]+j > end[1]))
                if (end[1] - countRight  >= start[1]+j){
                    console.log(matrix[start[0]][start[1]+j])
                    path.push(matrix[start[0]][start[1]+j]);
                }
                else {
                    console.log(path)
                    console.log(countDown)
                    console.log(countRight)
                    console.log(matrix[start[0] + countDown])
                    path.push(matrix[start[0] + countDown][end[1] - countRight]);
                    console.log(path)
                    countDown++;
                    if(countDown <= 4){
                        console.log(countRight)
                        if(countRight != 0){
                            countRight--;
                        }
                    }
                    else {
                        countRight++;
                    }
                }
            }
            // countRight++;
            pathsArray.push(path)
        }
        return pathsArray
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
    
    console.log(possibleMovements(matrix, start, end))
    
    // for(let i = 1; i <= 1; i++){
        //     path = [];
        //     path.push(startPoint)
        //     for(let j = 1; j <= steps; j++){
        //         //Right movement
        //         console.log(!(start[1]+j > end[i]))
        //         if (!start[1]+j > end[1]){
        //             path.push(matrix[start[0]][start[1]+j]);
        //         }
        //         else {
        //             path.push(matrix[start[0]+j][start[1]]);
        //         }
        //     }
        // }
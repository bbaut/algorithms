//Given a set of N cars that travel at the same speed but may be traveling in opossite direction, write a function that will 
// determine the number of times cars will pass each other.

//------------------------------------------
//          c->
//c->               c->
//      <-c             <-c
//                          <-c
//                                  c->
//------------------------------------------

//7 times

function crossCars (carsMatrix) {
    let rows = carsMatrix.length;
    let columns = carsMatrix[0].length;
    let arrayRightPositions = [];
    let arrayLeftPositions = [];
    let carsRight = 0;  
    let carsLeft = 0;  
    let cross = 0;

    for(let i = 0; i<rows; i++){
        for(let j = 0; j<columns; j++){
            if (carsMatrix[i][j] === 1){
                carsRight++;
                arrayRightPositions.push(j);
            }
            else if (carsMatrix[i][j] === -1){
                carsLeft++;
                arrayLeftPositions.push(j);
            }
        }
    }

    for(let i = 0; i<arrayRightPositions.length; i++){
        for(let j = 0; j<arrayLeftPositions.length; j++){
            if(arrayRightPositions[i]<arrayLeftPositions[j]){
                cross++;
            }
        }
    }
    
    return cross;
}

let carsMatrix = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0,-1, 0, 0, 0,-1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,-1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
]

console.log(crossCars(carsMatrix))
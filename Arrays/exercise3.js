//Find the gratest area formed by rectangles of 1's in a binary matrix

function rectangle (matrix) {
    let maxArea;
    let maxAreaRows = [];
    
    if(matrix.length === 0){
        return maxArea = 0;
    }
    
    let array = [...matrix[0]].map((element) => 0);
    // let arrayZeros = [... Array(rows)].map((element) => false)
    for(let row of matrix){
        row.forEach((element, index) => {
            if (element === 0) {
                array[index] = 0;
              } else {
                array[index] += element;
              }
        });
        maxAreaRows.push(maxAreaHistogram(array));
    }
    maxArea = (Math.max(...maxAreaRows));
    return maxArea;
}

function maxAreaHistogram(histogram) {
    let stack = [];
    let maxArea = 0;
    let index = 0;

    while(index < histogram.length){
        if(stack.length === 0 || histogram[index] >= histogram[stack[stack.length-1]]){
            stack.push(index);
            index += 1;
        }
        else {
            let topStack = stack.pop();
            let area;
            if(stack.length > 0){
                area = histogram[topStack] * (index - stack[stack.length-1] - 1);
            }
            else {
                area = histogram[topStack] * index;
            }
            maxArea = Math.max(maxArea, area);
        }
    }
    while (stack.length > 0 ){
        let topStack = stack.pop();
        let area;
        if(stack.length>0){
            area = histogram[topStack] * (index - stack[stack.length-1] - 1);
        }
        else {
            area = histogram[topStack] * index;
        }
        maxArea = Math.max(maxArea, area);
    }
    
    return maxArea;
}

const matrix = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
];

rectangle(matrix)
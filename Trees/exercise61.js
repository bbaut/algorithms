// Sweep Line Algorithm. Find the intersections of horizontal and vertical lines

function intersectionsLines(coordinates) {
    let points = [];
    let intersection = [];

    for (let i = 0; i < coordinates.length; i++) {
        points.push([coordinates[i][0], coordinates[i][1]]);
    }
 
    points.sort(function(a, b) {
        return a[0] - b[0];
    });

    let pointsSet = new Array();
    pointsSet.push(points[0]);

    for (let i = 1; i < points.length; i++) {
        if(points[i][0] === pointsSet[i-1][0]){
            console.log(points[i][1])
            console.log(pointsSet[i-1][1])
            intersection.push(points[i][0])
            break;
        }
        else {
            pointsSet.push(points[i])
        }
    }

    points.sort(function(a, b) {
        return a[1] - b[1];
    });

    pointsSet = [];
    pointsSet.push(points[0]);

    for (let i = 1; i < points.length; i++) {
        if(points[i][1] === pointsSet[i-1][1]){
            intersection.push(points[i][1])
            break;
        }
        else {
            pointsSet.push(points[i])
        }
    }

    return intersection;
}
 
// Points on a plane P[i] = (x, y)
let P = [[1, 2], [5, 2], [3, 1], [3, 4]];

console.log(intersectionsLines(P));
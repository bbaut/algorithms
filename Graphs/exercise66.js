// Chamber of secrets 

class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
    }
}

function matchWords (array) {
    const [translations, wordPairs] = array[0];
    let arrayOutput = new Array(wordPairs).fill("yes")

    const myGraph = new Graph();

    for(let i = 0; i< translations; i++) {
        let [letterToTranslate, letterTranslateTo] = array[i+1];

        if(myGraph.adjacentList[letterToTranslate] === undefined){
            myGraph.addVertex(letterToTranslate);
        }

        if(myGraph.adjacentList[letterTranslateTo] === undefined){
            myGraph.addVertex(letterTranslateTo);
        }

        myGraph.addEdge(letterToTranslate, letterTranslateTo);
    }

    const startingPointForTest = translations + 1;
    const finishPointForTest = wordPairs + startingPointForTest;

    for(let i = startingPointForTest; i < finishPointForTest; i++) {
        let [word, wordToTransalate] = array[i];

        if(word.length !== wordToTransalate.length){
            arrayOutput[i-startingPointForTest] = "no";
            continue;
        }
        
        if((word.length > 50 || word.length < 1)|| (wordToTransalate.length > 50 || wordToTransalate.length < 1)){
            arrayOutput[i-startingPointForTest] = "no";
            continue;
        }
        for(let j = 0; j < word.length; j++) {
            if(!checkLetter(word[j], wordToTransalate[j], myGraph.adjacentList)){
                arrayOutput[i-startingPointForTest] = "no";
            }
        }
    }
    return arrayOutput;
}

function checkLetter(letterFrom, letterTo, adjacentList) {
    let boolean = true;
    if(letterFrom === letterTo) {
        return boolean;
    }
    if(adjacentList[letterFrom] === undefined) {
        let boolean = false;
        return boolean;
    }
    if((adjacentList[letterFrom].length === 0)) {
        let boolean = false;
        return boolean;
    }

    if(!adjacentList[letterFrom].includes(letterTo)){
        if(adjacentList[letterFrom].length === 0){
            let boolean = false;
            return boolean;
        }
        adjacentList[letterFrom].forEach(element => {
            checkLetter(element, letterTo, adjacentList);
            if(!checkLetter(element, letterTo, adjacentList)){
                boolean = false;
            }
        });
    }

    return boolean;
}

// const inputArray = [
//     [3,3],
//     ['a', 'c'],
//     ['b', 'a'],
//     ['a', 'b'],
//     ['aaa', 'abc'],
//     ['abc', 'aaa'],
//     ['acm', 'bcm']
// ]
const inputArray = [
    [9,5],
    ['c', 't'],
    ['i', 'r'],
    ['k', 'p'],
    ['o', 'c'],
    ['r', 'o'],
    ['t', 'e'],
    ['t', 'f'],
    ['u', 'h'],
    ['w', 'p'],
    ['we', 'we'],
    ['can', 'the'],
    ['work', 'people'],
    ['it', 'of'],
    ['out', 'the']
]
console.log(matchWords(inputArray))
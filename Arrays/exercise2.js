// Display the numbers from 1 to 100 without using loops/conditionals

function diplayNumbers () {
    return [...Array(100).keys()].map(i => i+1).join(' ')
}

console.log(diplayNumbers())
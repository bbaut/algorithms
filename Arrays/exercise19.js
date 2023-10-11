// Determine if a series of parenthesis are balanced, and if not, how many parenthesis are missing at the first instance of an error.

class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length -1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

function checkBalancedParenthesis (expression) {
    
    const arrayExpression = expression.split("");
    const myStack = new Stack();
    let counter = 0;
    let counterClosed = 0; 

    for(let i = 0; i < arrayExpression.length; i++) {
        if(arrayExpression[i] === '(' && counterClosed === 0){
            myStack.push(arrayExpression[i]);
        }
        else if (arrayExpression[i] === '(' && counterClosed > 0){
            return counterClosed;
        }
        else {
            if(myStack.peek()){
                myStack.pop();
            }
            else {
                counterClosed++;
            }
        }
    }

    if(myStack.peek() !== undefined){
        return myStack.array.length;
    }
    else {
        return true;
    }
}

let parenthesisExp = "(())))())";
console.log(checkBalancedParenthesis(parenthesisExp));
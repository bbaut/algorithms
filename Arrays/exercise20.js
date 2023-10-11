// Check if an expression consisting of parenthesis, square brackets and curly brackets is balanced.

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

function checkBalancedExpression (expression) {
    const myStack = new Stack();
    const arrayExpression = expression.split("");

    for(let i = 0; i < arrayExpression.length; i++) {
        if(arrayExpression[i] === '{' || arrayExpression[i] === '[' || arrayExpression[i] === '('){
            myStack.push(arrayExpression[i]);
        }
        else {
            if(myStack.peek()){
                if(myStack.peek() !== '{' && arrayExpression[i] === '}' 
                    || myStack.peek() !== '[' && arrayExpression[i] === ']'
                    || myStack.peek() !== '(' && arrayExpression[i] === ')' 
                )
                {
                    return false;
                }
            }
            else {
                return false;
            }
            myStack.pop();
        }
    }
    return true;
}

let parenthesisExp = "{()[]}";
console.log(checkBalancedExpression(parenthesisExp));
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
console.log(checkBalancedParenthesis(parenthesisExp));
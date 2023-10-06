//Implement a circular queue

class Node {
    constructor(value, first) {
        this.value = value;
        this.next = first;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value, this.first);

        if(this.length === 0) {
            this.first = newNode;
            this.first.next = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.first){
            return null;
        }

        if(this.first === this.last) {
            this.first = null;
            this.last = null;
            this.length--;
            return this;
        }

        if(this.length === 2){
            this.first.next = this.first
            this.last = this.first
            this.length--;
        }
        else {
            const firstNext = this.first.next
            this.first = firstNext;
            this.last.next = firstNext
            this.length--;
        }

        return this;
    }
}

function circularQueue(arrayOfElements) {
    if(arrayOfElements.length === 0){
        return null
    }

    const myQueue = new Queue();

    for (let i = 0; i < arrayOfElements.length; i++){
        myQueue.enqueue(arrayOfElements[i])
    }

    return myQueue;
}

const arrayOfElements = ['Patricia', 'Jay', 'Megan', 'Charly', 'Luke'];

const myCircularQueue = circularQueue(arrayOfElements);
console.log(myCircularQueue)
console.log(myCircularQueue.dequeue())
console.log(myCircularQueue.dequeue())
console.log(myCircularQueue.dequeue())
console.log(myCircularQueue.dequeue())
console.log(myCircularQueue.dequeue())

// console.log(myQueue.enqueue('Joy'))
// console.log(myQueue.enqueue('Matt'))
// console.log(myQueue.enqueue('Pavel'))
// console.log(myQueue.enqueue('Samir'))

// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// Implement a priority queue with a linked list. 

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class LinkedList {
    constructor(value, priority) {
        this.head = {
            value: value,
            priority: priority,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    peek() {
        return this.head.value;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    push(value, priority){
        let head = this.head
        let temp = new Node(value, priority);
        if (this.head.priority < priority){
            temp.next = head;
            this.head = temp;
            this.length++;
        }
        else {
            while(head.next != null && head.next.priority > priority){
                head = head.next
            }
            temp.next = head.next;
            head.next = temp;
            this.length++;
        }
        return this;
    }

    pop(){
        if(this.head === null){
            return null
        }

       this.head = this.head.next;
       return this.head; 
    }
}

const myLinkedList = new LinkedList(10,1);
myLinkedList.push(5, 3);
myLinkedList.push(16, 0);
myLinkedList.push(34, 4);
myLinkedList.push(65, 2);

let myPriorityQueue = myLinkedList.printList();

console.log(myPriorityQueue);
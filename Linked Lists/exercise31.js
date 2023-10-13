// Find the middle node of a single linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    middleNode(){
        let counter = 0;
        let currentNode = this.head;
        let middleIndex = Math.floor(this.length/2);
        
        while(counter !== middleIndex) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}



const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(57);
myLinkedList.append(433);
myLinkedList.append(1);

console.log (myLinkedList.middleNode())

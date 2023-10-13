// Find the node at the beginning of a loop in a singly linked list 

// Find the node at the beginning of a loop in a singly linked list 

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode;
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

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    loopOnIndex(index){
        let currentNode = this.head;
        let count = 1;

        while(count < index) {
            currentNode = currentNode.next;
            count++
        }

        let jointPoint = currentNode;

        console.log(jointPoint)

        while(currentNode.next != null){
            currentNode = currentNode.next
        }

        currentNode.next = jointPoint;
        return this.head
    }
}



const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(57);
myLinkedList.append(1);

console.log (myLinkedList)

console.log(myLinkedList.loopOnIndex(3))
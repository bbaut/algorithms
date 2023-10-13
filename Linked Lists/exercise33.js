// Find the k-th to last node of a singly lisked list.  

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

    traverseToNode(node) {
        if(node > this.length) {
            return null;
        }

        let counter = 1;
        let currentNode = this.head;
        while(counter !== node) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(34);
myLinkedList.append(65);

console.log(myLinkedList.traverseToNode(2));
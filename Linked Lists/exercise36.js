// Reverse a linked list

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
            next: null,
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
}

function mergeSortLL(linkedList) {
    let prev = null;
    let next = null;
    let current = linkedList.head;

    while(current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    return head;
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(34);
myLinkedList.append(65);

let reversedLinkedList = mergeSortLL(myLinkedList)

console.log(reversedLinkedList);
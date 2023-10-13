// Find the node at the beginning of a loop in a singly linked list 

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode;
        this.flag = 0;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            flag: 0
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

    loopOnIndex(index){
        let currentNode = this.head;
        let count = 1;

        while(count < index) {
            currentNode = currentNode.next;
            count++
        }

        let jointPoint = currentNode;

        while(currentNode.next != null){
            currentNode = currentNode.next
        }

        currentNode.next = jointPoint;
        return this.head;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(57);
myLinkedList.append(1);
myLinkedList.loopOnIndex(3);

function findNode (head) {
    while (head != null) {
        if(head.flag === 1){
            return true;
        }
        head.flag = 1;
        head = head.next;
    }
    return false;
}

console.log(findNode(myLinkedList.head));
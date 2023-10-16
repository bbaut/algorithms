// Implement merge sort for linked lists

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
}

function mergeSortLL(head) {
    if(head === null || head.next === null){
        return head;
    }

    let middleNode = getMiddleNode(head);
    let nextNodeOfMiddle = middleNode.next;
    middleNode.next = null;

    let left = mergeSortLL(head);
    let right = mergeSortLL(nextNodeOfMiddle);
    let sortedList = sortedMerge(left, right);
    return sortedList;

}

function getMiddleNode(head) {
    let firstHalf = head;
    let lastHalf = head;

    while (lastHalf.next != null && lastHalf.next.next != null) 
    {
        firstHalf = firstHalf.next;
        lastHalf = lastHalf.next.next;
    }
    return firstHalf;
}

function sortedMerge(left, right){
    let result = null;

    if(left === null) return right;

    if(right === null) return left;

    if(left.value <= right.value){
        result = left;
        result.next = sortedMerge(left.next, right);
    }
    else {
        result = right;
        result.next = sortedMerge(left, right.next);
    }
    return result;
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(34);
myLinkedList.append(65);

console.log(mergeSortLL(myLinkedList.head))
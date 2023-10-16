//Given a sigle linked list as input, determine if the content is a palindrome

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function createLinkedList(list, loopPosition){
    let linkedList = new Node(list[0]);
    let temp = linkedList;
    let loop;

    if (loopPosition === 0) {
        loop = linkedList;
    }

    let i = 0;
    while (i < list.length) {
        i++;
        temp.next = new Node(list[i]);
        temp = temp.next;
        if (loopPosition === i) {
            loop = temp;
        }
    }

    if (loopPosition) {
        temp.next = loop;
    }

    return linkedList
}

function palindrome(list) {
    let linkedList = createLinkedList(list)
    const head = linkedList.value;
 
    if (!linkedList || !linkedList.next || !head) return true;
  
    let fast = linkedList;
    let slow = linkedList;
    let temp;
  
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
  
    let prev = null;
    while (slow) {
      temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
  
    let left = linkedList;
    let right = prev.next;
  
    while (right) {
      if (left.value !== right.value) {
        return false;
      }
  
      left = left.next;
      right = right.next;
    }
  
    return true;
}

const list = [1,2,3,2,1]

console.log(palindrome(list));
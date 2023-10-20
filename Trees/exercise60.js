// Create a priority queue using the heap tree structure

class PriorityQueue {
    constructor(){
        this.size = -1;
    }

    insert(value) {
        this.size = this.size + 1;
        priorityQueue[this.size] = value;
        this.shiftUp(this.size);
    }

    parent(i){
        return parseInt((i - 1) / 2);
    }

    swap(i,j){
        let tempVariable = priorityQueue[i];
        priorityQueue[i] = priorityQueue[j];
        priorityQueue[j] = tempVariable;
    }

    shiftUp(i) {
        while(i > 0 && priorityQueue[this.parent(i)] < priorityQueue[i]){
            this.swap(this.parent(i), i);
            i = this.parent(i);
        }
    }

}


let priorityQueue = Array(9);

const queue = new PriorityQueue();
queue.insert(45);
queue.insert(20);
queue.insert(14);
queue.insert(12);
queue.insert(31);
queue.insert(7);
queue.insert(11);
queue.insert(13);
queue.insert(7);

console.log(priorityQueue);

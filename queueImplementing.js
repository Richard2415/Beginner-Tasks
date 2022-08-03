// (FIFO)
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }



    enqueue(value) { // Add items
        this.items[this.rear] = value;
        this.rear++
    }

    dequeue() {   // remove items
        const item = this.items[this.front]
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {  //checks the array is empty
        return this.rear - this.front === 0;
    }

    peek() {  // Shows the first element in the array
        return this.items[this.front];
    }

    size() {  // Size of the array
        return this.rear - this.front
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

function firstInFirstOut() {
    for (; ;) {
        let userInput = Number(prompt(('Give your Choice: 1:add, 2:remove, 3:print, 4:exit')))

        switch (userInput) {
            case 1:
                queue.enqueue(Number(prompt('Enter your number: ')));
                queue.print();
                break;

            case 2:
                queue.dequeue();
                queue.print();
                break;

            case 3:
                queue.print();
                break;

            case 4:
                return false;
        }
    }
}

console.log("debug: start of prg")
console.log(firstInFirstOut(queue))
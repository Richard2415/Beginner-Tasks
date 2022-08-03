// stacking

//Method 1

class Stacking {
    constructor() {
        this.stack = [];
        this.rear = 0;
        this.front = 0;
    }

    addNum(num) {
        this.stack[this.rear] = num;
        this.rear++;
    }

    removeNum() {
        const item = this.stack[this.rear];
        this.stack.splice(-1);
        return item
    }

    printNum() {
        return console.log(this.stack);
    }

}


const stack = new Stacking();
stack.addNum(10)
stack.addNum(20)
stack.addNum(30)
stack.printNum();
stack.removeNum();
stack.printNum();
console.log(stack.__proto__);

//Method 2

// Without using push and pop methods
// Without break (it will loops from case 1 to case 2 without user input(case 2))
// With break it will works fine

function stacking() {
    let stack = [10];

    for (; ;) {

        const input = Number(prompt('Give your Choice: 1:add, 2:remove, 3:exit'))
        alert(`Your number is ${input}`)

        switch (input) {
            case 1:
                stack[stack.length] = Number(prompt('Enter Your Number: '))
                console.log(`Number is added: ${stack}`)
                console.log(`Numbers are left in the stack: ${stack}`)
                break;

            case 2:
                let removedNum = stack.splice(-1)
                console.log(`Number is removed: ${removedNum}`)
                console.log(`Numbers are left in the stack: ${stack}`)
                break;

            case 3:
                return 'false';

            default:
                alert('Enter numbers between 1 to 3')
        }



    }
}

stacking();
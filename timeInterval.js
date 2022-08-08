// Task: console.log(start)
//       console.log(stop) (stop should be printed after 5sec)


//Method 1:
function first() {
    console.log('Start');
}

function second() {
    console.log('Stop');
}

let interval = async () => {
    first();
    await setTimeout(second, 2000)
}

interval();



//Method 2:
const response = () => {
    console.log('Start');
    setTimeout(() => {
        console.log('Wait for five seconds');
        console.log('Stop');
    }, 5000)
}
response();

//Method 3:
let promise = new Promise((resolve, reject) => {
    console.log('Start');

    setTimeout(() => resolve('Stop'), 5000)
})

let printAll = () => {
    promise.then((result) => {
        console.log(result);
    })
}

printAll()
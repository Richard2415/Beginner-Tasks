// Task: console.log(start)
//       console.log(stop) (stop should be printed after 5sec)

//Method 1
const response = () => {
    console.log('Start');
    setTimeout(() => {
        console.log('Wait for five seconds');
        console.log('Stop');
    }, 5000)
}
response();

//Method 2
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
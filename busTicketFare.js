// Bus Ticket Calculator
// If the conductor gives ticket based on boarding point(0 to 3) and destination(0 to 3)

const calculateBusFair = () => {

    let stopping = [
        [0, 15, 20, 25],
        [5, 0, 30, 40],
        [8, 17, 0, 35],
        [15, 5, 10, 0],
    ]

    const userInput = prompt('Please Input Your starting point(0 to 3) with comma and ending point(0 to 3)').split(',')

    let start = userInput[0];
    let stop = userInput[1];

    console.log(`Your Ticket price is ₹${stopping[start][stop]}`);
}

calculateBusFair();

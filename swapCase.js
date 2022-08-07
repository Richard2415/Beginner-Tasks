// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


//Method 1
const swapCase = (str) => {
    let charMap = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            charMap += str[i].toLowerCase();
        } else {
            charMap += str[i].toUpperCase();
        }
    }
    console.log(charMap);
}

swapCase('The Quick Brown Fox')

//Method 2
const swapArr = (arr) => {
    let charArr = '';
    arr.split('').map(char =>
        (char === char.toUpperCase()) ? charArr += char.toLowerCase() : charArr += char.toUpperCase()
    )
    console.log(charArr);
}

swapArr('The Quick Brown Fox')
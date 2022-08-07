//Write a program to find the character that is most common in the string

// Method 1:
const maxChar = (str) => {
    let obj = {};
    for (let char of str)
        (!obj[char]) ? obj[char] = 1 : obj[char]++;
    console.log(obj);
}

maxChar('richardselvaraj');

// Method 2:
function maxCharacter(str) {
    const charMap = {};
    str.split('').forEach((char) => {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })
    console.log(charMap);
}

maxCharacter('richardselvaraj');



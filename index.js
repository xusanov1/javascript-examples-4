"use strict";

// 1-misol

// function removeExclamation(s) {
//     if (s.endsWith('!')) {
//         return s.slice(0, -1);
//     } else {
//         return s;
//     }
// }

// console.log(removeExclamation("Hi!")); 

// 2-misol

// function findVolumeDifference(a, b) {
//     var volumeA = a[0] * a[1] * a[2];
//     var volumeB = b[0] * b[1] * b[2];
//     return Math.abs(volumeA - volumeB);
// }

// console.log(findVolumeDifference([2, 2, 3], [5, 4, 1]));

// 3-misol

// function makeNegative(num) {
//     if (num > 0) {
//         return -num;
//     } else {
//         return num;
//     }
// }

// console.log(makeNegative(1));   
// console.log(makeNegative(-5)); 
// console.log(makeNegative(0));  

// 4-misol

// function flickSwitch(lst) {
//     let result = true;
//     const output = [];

//     for (let i = 0; i < lst.length; i++) {
//         if (lst[i] === 'flick') {
//             result = !result;
//         }
//         output.push(result);
//     }

//     return output;
// }

// console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); 

// 5-misol

// function excludingVatPrice(vat) {
//     if (vat === null) {
//         return -1;
//     }

//     let vatPercentage = 15;
//     let priceWithoutVat = vat / (1 + vatPercentage / 100);

//     return parseFloat(vat.toFixed(2));
// }

// console.log(excludingVatPrice(230.00));


// 6-misol

// function removeCharacter(str) {
//     return str.slice(1, -1);
// }

// console.log(removeCharacter("hello"));


// 7-misol

// function strCount(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(strCount("Hello", "l"));


// 8-misol

// function positionInAlphabet(letter) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let lowercaseLetter = letter.toLowerCase();
//     let pos = alphabet.indexOf(lowercaseLetter) + 1;
//     return `Position of alphabet: ${pos}`;
// }

// console.log(positionInAlphabet("a"));


// 9-misol

// function getAsciiChar(num) {
//     return String.fromCharCode(num);
// }

// console.log(getAsciiChar(97));


// 10-misol

function addLengthToStringWords(str) {
    let words = str.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let length = word.length;
        result.push(`${word} ${length}`);
    }

    return result;
}

console.log(addLengthToStringWords("The quick brown fox jumped over the lazy dog"));
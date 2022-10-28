/* Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
*/


// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

function addToZero (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero([1, 4, 11, 2, 37, -4])) // should log true because 4 and -4 add to 0.
console.log(addToZero([0, 21, 33, 6, 0, -9])) // should log true because 0 and 0 add to 0.
console.log(addToZero([0, 1, 2, 3, 4, 5])) // should log false because no two numbers add to 0.
console.log(addToZero(array)) // should log true because -12 and 12 add to 0.

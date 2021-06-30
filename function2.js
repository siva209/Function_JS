const prompt = require('prompt-sync')();
const num1 = prompt('Enter number ');
const num2 = prompt('Enter number ');

var temp = 0, rem = 0, sum = 0;
function isPalindrome(num1, num2) {
    while (num1 > 0) {
        temp = num1;
        rem = temp % 10;
        num1 = Math.floor(num1 / 10);
        sum = (sum * 10) + rem;
        console.log(sum);
    }
    if (num2 == sum) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome(num1, num2));
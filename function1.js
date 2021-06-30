const prompt = require('prompt-sync')();
const num = prompt('Enter number ');
function isPrime(num) {
  if (num == 1) {
    return false;
  }
  else if (num == 2) {
    return true;
  }
  else {
    for (var i = 2; i < (num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log("Number is Prime :" + isPrime(num));
console.log("Palindrome of the number is Prime :" + isPrime(getPalindrome(num)));
function getPalindrome(num) {
  var temp = 0, rem = 0, sum = 0;
  while (num > 0) {
    temp = num;
    rem = temp % 10;
    num = Math.floor(num / 10);
    sum = (sum * 10) + rem;
  }
  return sum;
}
/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  // Your code here
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Use the reduce method to iterate through the array of words
    // and find the shortest word
    return words.reduce((shortest, current) => {
      // If the current word is shorter than the shortest word
      // or if the current word is the same length as the shortest word
      // and appears later in the sentence, update the shortest word
      if (current.length < shortest.length || (current.length === shortest.length && sentence.indexOf(current) > sentence.indexOf(shortest))) {
        shortest = current;
      }
      return shortest;
    });
};
console.log(shortestWord('what a wonderful life'));
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}

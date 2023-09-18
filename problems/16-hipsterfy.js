/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

function hipsterfy(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Use the map method to create a new array where each word is missing its last vowel
    const hipsterWords = words.map(word => {
      // Split the word into an array of characters
      const characters = word.split('');
      
      // Use a loop to find the index of the last vowel in the word
      let lastVowelIndex = -1;
      for (let i = characters.length - 1; i >= 0; i--) {
        if (isVowel(characters[i])) {
          lastVowelIndex = i;
          break;
        }
      }
      
      // If a vowel was found, remove it and any characters after and before the removed vowel , keep them .
      if (lastVowelIndex >= 0) {
        characters.splice(lastVowelIndex, characters.length - lastVowelIndex);
      }
      
      // Join the characters back into a word and return it
      return characters.join('');
    });
  
    // Join the hipster words into a new sentence and return it
    return hipsterWords.join(' ');
  }
  
  // Define a helper function to check if a character is a vowel
  function isVowel(char) {
    return 'aeiou'.includes(char.toLowerCase());
  }
  console.log(hipsterfy('When should everyone wake up?'));

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}

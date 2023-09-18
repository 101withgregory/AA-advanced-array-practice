/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')
    

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

function repeatingTranslate(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    
    // Use the map method to create a new array of translated words
    const translatedWords = words.map(word => {
      // If the word is shorter than 3 characters, return it unchanged
      if (word.length < 3) {
        return word;
      }
      
      // Split the word into an array of characters
      const characters = word.split('');
      
      // Find the index of the last vowel in the word
      let lastVowelIndex = -1;
      for (let i = characters.length - 1; i >= 0; i--) {
        if (isVowel(characters[i])) {
          lastVowelIndex = i;
          break;
        }
      }
      
      // If the word ends with a vowel, repeat it twice
      if (isVowel(characters[characters.length - 1])) {
        return word + word.toLowerCase();
      }
      
      // If the word ends with a non-vowel, repeat all letters after the last vowel
      if (lastVowelIndex >= 0) {
        const repeatedChars = characters.slice(lastVowelIndex).join('');
        return word + repeatedChars.toLowerCase();
      }
      
      // If no vowels were found, return the word unchanged
      return word;
    });
    
    // Join the translated words back into a sentence and return it
    return translatedWords.join(' ');
  }
  
  // Define a helper function to check if a character is a vowel
  function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
  }
  

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}

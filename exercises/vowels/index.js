// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

vowels = str => (str.toLowerCase().match(/a|e|i|o|u/g) || '').length;

vowels = str => [...str].filter(l => 'aeiou'.includes(l.toLowerCase())).length;

vowels = str => {
  let count = 0;
  for (const letter of str) {
    if ('aeiou'.includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
};

vowels = str => (str.match(/[aeiou]/gi) || '').length;

module.exports = vowels;

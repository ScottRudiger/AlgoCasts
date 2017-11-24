// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const getChars = string => string.toLowerCase().match(/\w/g);

const countChars = string => Object.entries(
  [...string].reduce((counts, char) => {
    counts[char] = counts[char] + 1 || 1;
    return counts;
  }, {})
);

const anagrams = (stringA, stringB) => {
  const a = JSON.stringify(countChars(getChars(stringA)));
  const b = JSON.stringify(countChars(getChars(stringB)));
  const sameCounts = JSON.parse(a).every(count => b.includes(JSON.stringify(count)));
  return sameCounts && a.length === b.length;
};

module.exports = anagrams;

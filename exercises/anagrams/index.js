// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  const getChars = string => string.toLowerCase().match(/\w/g);
  const a = getChars(stringA), b = getChars(stringB);
  const countChars = string => Object.entries(
    [...string].reduce((counts, char) => {
      counts[char] = counts[char] + 1 || 1;
      return counts;
    }, {})
  );
  const sameCounts = countChars(a).every(count => JSON.stringify(countChars(b)).includes(JSON.stringify(count)));
  return sameCounts && a.length === b.length;
};

module.exports = anagrams;

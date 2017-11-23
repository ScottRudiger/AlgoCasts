// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
  const counts = [...str].reduce((counts, char) => (
    counts[char] ? counts[char]++ : counts[char] = 1,
    counts
  ), {});
  let maxC, maxN = 0;
  for (let count in counts) {
    if (counts[count] > maxN) {
      maxN = counts[count];
      maxC = count;
    }
  }
  return maxC;
};

module.exports = maxChar;

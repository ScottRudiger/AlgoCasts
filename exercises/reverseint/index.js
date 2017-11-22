// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  const nArr = [...`${n}`];
  const neg = n < 0 ? nArr.shift() : '';
  return +`${neg + nArr.reverse().join``}`;
};

console.log(reverseInt(-5));

module.exports = reverseInt;

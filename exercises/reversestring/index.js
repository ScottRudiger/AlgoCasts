// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse = str => [...str].reverse().join``;

reverse = str => {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

reverse = str => {
  let reverseStr = '';
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
};

reverse = str => [...str].reduce((reversed, char) => char + reversed, '');

module.exports = reverse;

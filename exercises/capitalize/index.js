// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

capitalize = str => str.split` `.map(word => word[0].toUpperCase() + word.slice(1)).join` `;

capitalize = str => str.replace(/(^\w|\s\w)/g, match => match.toUpperCase());

capitalize = str => {
  let result = '';
  [...str].forEach((char, i) => {
    !str[i - 1] || str[i - 1] === ' '
    ? result += char.toUpperCase()
    : result += char;
  });
  return result;
};

module.exports = capitalize;

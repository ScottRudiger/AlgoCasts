// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

const pyramid = n => {
  for (let i = 1, j = n; i <= (n + 2), j > 0; i += 2, j--) {
    const level = ' '.repeat(j - 1) + '#'.repeat(i) + ' '.repeat(j - 1);
    console.log(level);
  }
};

module.exports = pyramid;

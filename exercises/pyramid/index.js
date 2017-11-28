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

pyramid = n => {
  for (let i = 1, j = n; i <= (n + 2), j > 0; i += 2, j--) {
    const level = ' '.repeat(j - 1) + '#'.repeat(i) + ' '.repeat(j - 1);
    console.log(level);
  }
};

pyramid = n => {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  for (let i = 0; i < n; i++) {
    let level = '';
    for (let j = 0; j < n * 2 - 1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
};

pyramid = (n, i = 1, j = n) => {
  if (i > n * 2) return;
  console.log(' '.repeat(j - 1) + '#'.repeat(i) + ' '.repeat(j - 1));
  pyramid(n, i + 2, j - 1);
};

module.exports = pyramid;

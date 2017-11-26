// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

steps = n => {
  for (let i = 1; i <= n; i++) {
    const step = '#'.repeat(i).padEnd(n);
    console.log(step);
  }
};

steps = n => {
  for (let i = 1; i <=n; i++) {
    const step = '#'.repeat(i) + ' '.repeat(n - i);
    console.log(step);
  }
};

steps = n => {
  for (let i = 0; i < n; i++) {
    let step = '';
    for (let j = 0; j < n; j++) {
      if (j <= i) step += '#';
      else step += ' ';
    }
    console.log(step);
  }
};

module.exports = steps;

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

fib = n => { // linear O(n)
  const seq = [0, 1];
  while (seq.length !== n + 1) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq[seq.length - 1];
};

fib = (n, seq = [0, 1]) => { // linear O(n)
  if (seq.length === n + 1) return seq.pop();
  return fib(n, [...seq, seq[seq.length - 1] + seq[seq.length - 2]]);
};

fib = n => { // constant O(1)
  const phi = (Math.sqrt(5) + 1) / 2;
  const fib = (phi ** n - (-phi) ** -n) / Math.sqrt(5);
  return Math.ceil(fib);
};

module.exports = fib;

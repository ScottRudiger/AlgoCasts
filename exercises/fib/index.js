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

// linear O(n) time complexity; constant O(1) space complexity
fib = n => { // n = 4
  let fib = 0;  // 1 1 2 3
  let prev = 1; // 0 1 1 2
  for (let i = 0; i < n; i++) {
    fib += prev;
    prev = fib - prev;
  }
  return fib;
};

fib = n => { // exponential time ~O(2^n)
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
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

fib = n => { // refactor; still constant O(1) time & space
  const phi = (Math.sqrt(5) + 1) / 2;
  return Math.ceil(
    (phi ** n - (-phi) ** -n) / Math.sqrt(5)
  );
};

// approximation; may not work for larger nums; constant O(1) time & space
fib = n => Math.round(((Math.sqrt(5) + 1) / 2) ** n / Math.sqrt(5));

fib = n => {
  const memo = [];
  return (inner = n => {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = inner(n - 1) + inner(n - 2);
    return memo[n];
  })(n);
};

module.exports = fib;

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

matrix = n => {
  const board = Array.from({length: n}, () => Array(n).fill(0));
  let i = j = v = 0;
  const checkSpot = (i, j) => board[i] ? board[i][j] === 0 : false;
  const nextSpot = (_i, _j) => {
    if (checkSpot(_i, _j)) { v++; }
    else if (checkSpot(_i, _j + 1) && checkSpot(_i - 1, j)) { i--; v++ }
    else if (checkSpot(_i, _j + 1)) { j++; v++; }
    else if (checkSpot(_i + 1, _j)) { i++; v++; }
    else if (checkSpot(_i, _j - 1)) { j--; v++; }
    else if (checkSpot(_i - 1, _j)) { i--; v++; }
  }
  while (board.some(row => row.some(v => !v))) {
    nextSpot(i, j);
    board[i][j] = v;
  }
  return board;
};

matrix = n => {
  const board = Array.from({length: n}, () => Array(n).fill(0));
  const checkSpot = (i, j) => board[i] ? board[i][j] === 0 : false;
  let i = j = v = 0;
  while (!board.every(row => row.every(Boolean))) {
    if (checkSpot(i, j)) board[i][j] = v++;
    else if (checkSpot(i, j + 1) && checkSpot(i - 1, j)) board[--i][j] = v++;
    else if (checkSpot(i, j + 1)) board[i][++j] = v++;
    else if (checkSpot(i + 1, j)) board[++i][j] = v++;
    else if (checkSpot(i, j - 1)) board[i][--j] = v++;
    else if (checkSpot(i - 1, j)) board[--i][j] = v++;
  }
  return board;
};

module.exports = matrix;

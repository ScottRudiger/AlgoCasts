// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const levelWidth = root => {
  const levels = [];
  // initialize collection of nodes at each level (top level will always be 1--root)
  let level = [root];
  // for each level
  while (level.length) {
    // add that level's length to levels
    levels.push(level.length);
    // reset level to level's children (i.e., empty level and replace it with all children of nodes at this level)
    level = level.reduce((children, node) => [...children, ...node.children], []);
  }
  return levels;
};

module.exports = levelWidth;

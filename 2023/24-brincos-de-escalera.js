function getStaircasePaths(steps, maxJump) {
  const result = [];

  function generateJumps(currentJump) {
    if (currentJump.reduce((sum, value) => sum + value, 0) === steps) {
      result.push([...currentJump]);
      return;
    }

    for (let i = 1; i <= maxJump; i++) {
      if (currentJump.reduce((sum, value) => sum + value, 0) + i <= steps) {
        currentJump.push(i);
        generateJumps(currentJump);
        currentJump.pop();
      }
    }
  }

  generateJumps([]);

  return result;
}

getStaircasePaths(2, 1) // [[1, 1]]
getStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 2)
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
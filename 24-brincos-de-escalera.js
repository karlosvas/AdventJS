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
// console.log(getStaircasePaths(4, 2))
// console.log(getStaircasePaths(5, 2))
// console.log(getStaircasePaths(3, 3))

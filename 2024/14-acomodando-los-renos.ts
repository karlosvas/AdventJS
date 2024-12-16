function minMovesToStables(reindeer: number[], stables: number[]): number {
  reindeer.sort();
  stables.sort();

  let sum: number = 0;
  for (let i: number = 0; i < reindeer.length; i++) sum += Math.abs(reindeer[i] - stables[i]);

  return sum;
}

function prepareGifts(gifts: number[]): number[] {
  let numSet: Set<number> = new Set();

  for (let i = 0; i < gifts.length; i++) numSet.add(gifts[i]);

  return Array.from(numSet).sort((a, b) => a - b);
}

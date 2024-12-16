function createXmasTree(height: number, ornament: string): string {
  let sol = "";
  let start = 1;

  for (let i = 0; i < height; i++) {
    sol += "_".repeat(height - i - 1) + ornament.repeat(start) + "_".repeat(height - i - 1) + "\n";
    start += 2;
  }

  sol += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
  return (sol += "_".repeat(height - 1) + "#" + "_".repeat(height - 1));
}

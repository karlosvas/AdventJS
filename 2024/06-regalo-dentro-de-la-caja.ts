function inBox(box: string[]): boolean {
  let i: number = 0;
  let dentro: boolean = false;

  for (let b of box) {
    for (let j of b) {
      if (i == 0) dentro = false;
      else if (j == "#") dentro = !dentro;
      else if (dentro && j == "*") return true;
    }
    i++;
  }

  return false;
}

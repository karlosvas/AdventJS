type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  let magicBoots: { [key: number]: { I: number; R: number } } = {};
  let sol: number[] = [];

  for (let shoe of shoes) {
    if (!magicBoots[shoe.size]) magicBoots[shoe.size] = { I: 0, R: 0 };

    magicBoots[shoe.size][shoe.type]++;

    if (magicBoots[shoe.size].I > 0 && magicBoots[shoe.size].R > 0) {
      sol.push(shoe.size);
      magicBoots[shoe.size].I--;
      magicBoots[shoe.size].R--;
    }
  }

  return sol;
}

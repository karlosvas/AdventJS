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

/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
*/

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []

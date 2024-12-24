type Backtraking = {
  start: number;
  currentSet: string[];
};

function generateGiftSets(gifts: string[]) {
  const result: string[][] = [];
  const stack: Backtraking[] = [{ start: 0, currentSet: [] }];

  while (stack.length > 0) {
    const item = stack.pop();
    if (!item) continue;
    const { start, currentSet }: { start: number; currentSet: string[] } = item;

    if (currentSet.length > 0) result.push([...currentSet]);

    for (let i = gifts.length - 1; i >= start; i--) stack.push({ start: i + 1, currentSet: [...currentSet, gifts[i]] });
  }

  return result.sort((a, b) => a.length - b.length);
}
/*
  Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.
  (
  Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.
  
  Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.
  */
console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(["ball"]));
// [
//   ['ball']
// ]

console.log(generateGiftSets(["game", "pc"]));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
/*
  Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.
  
  Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉
  */

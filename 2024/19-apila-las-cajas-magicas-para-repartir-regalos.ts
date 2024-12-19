function distributeWeight(weight: number): string {
  const boxRepresentations: Record<number, string[]> = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  let sol: string[] = [];
  const keys = Object.keys(boxRepresentations)
    .map(Number)
    .sort((a, b) => b - a);

  let lastK: number = 10;
  for (let key of keys) {
    let keySelected: boolean = false;

    while (weight >= key) {
      // Nueva caja
      keySelected = true;
      for (let i = boxRepresentations[key].length - 1; i > 0; i--) {
        let part = boxRepresentations[key][i];
        sol.push(part + "\n");
      }
      console.log(sol);
      weight -= key;
      lastK = key;
    }

    // Si hemos seleiconado la caja le ponemos la tapa
    if (keySelected) sol.push(boxRepresentations[lastK][0] + "\n");
  }

  return sol.reverse().join("").trimEnd();
}

/*
  ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.
  Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:
  _
  1: | _ |
    _____
  2: | _____ |
    _____
  5: |     |
    | _____ |
    _________
  10: |         |
      | _________ |
  Representación en JavaScript:
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }
  Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso(arriba) a más peso(abajo).
  Siempre alineadas a la izquierda, además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.
*/

// Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios
console.log(distributeWeight(1));
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2));
// // Devuelve:
// //  ___
// // |___|

console.log(distributeWeight(3));
// // Devuelve:
// //  _
// // |_|_
// // |___|

console.log(distributeWeight(4));
// // Devuelve:
// //  ___
// // |___|
// // |___|

console.log(distributeWeight(5));
// // Devuelve:
// //  _____
// // |     |
// // |_____|

console.log(distributeWeight(6));
// // Devuelve:
// //  _
// // |_|___
// // |     |
// // |_____|

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

/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:
*/
console.log(inBox(["###", "#*#", "###"])); // ➞ true

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false

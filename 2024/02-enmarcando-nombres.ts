function createFrame(names: string[]): string {
  let maxLenth = 0;
  for (let name of names) maxLenth = Math.max(maxLenth, name.length);

  let arr: string = "";
  let index = 0;

  for (let i = 0; i < names.length + 2; i++) {
    if (i == 0) arr += "*".repeat(maxLenth + 4) + "\n";
    else if (i == names.length + 2 - 1) arr += "*".repeat(maxLenth + 4);
    else {
      arr += "* " + names[index].padEnd(maxLenth, " ") + " *\n";
      index++;
    }
  }

  return arr;
}

/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/
console.log(createFrame(["midu"]));

// Resultado esperado:
/*
 ********
 * midu *
 ********
 */

console.log(createFrame(["a", "bb", "ccc"]));

// Resultado esperado:
/*
 *******
 * a   *
 * bb  *
 * ccc *
 *******
 */
console.log(createFrame(["a", "bb", "ccc", "dddd"]));

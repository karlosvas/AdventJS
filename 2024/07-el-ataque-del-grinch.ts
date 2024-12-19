function fixPackages(packages: string): string {
  let stack: string[] = [];

  for (let char of packages) {
    if (char == ")") {
      let temp: string = "";
      while (stack.length > 0 && stack[stack.length - 1] !== "(") temp += stack.pop();
      stack.pop();
      stack.push(...temp);
    } else stack.push(char);
  }

  return stack.join("");
}

/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:
*/
console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages("a(bc(def)g)h"));
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages("abc(def(gh)i)jk"));
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages("a(b(c))e"));
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

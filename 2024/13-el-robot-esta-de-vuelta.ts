function isRobotBack(moves) {
  // Ubicación del robot
  let robot: [number, number] = [0, 0];

  // Movimientos del robot
  const movesRobot: Record<string, number> = {
    R: 1,
    L: -1,
    U: 1,
    D: -1,
  };

  // Movimientos del robot hasta el momento
  let afterMove: string = "";
  for (let i = 0; i < moves.length; i++) {
    let move: string = moves[i]; // Opcion actual
    let beforeMove: string = moves[i + 1]; // Opcion siguiente

    // Si lo último no fue ! no lo añadimos porque ya lo manejamos al cambiarlo
    afterMove += move;

    // Pasos a seguir
    let step: number = movesRobot[move];
    let nextStep: number = movesRobot[beforeMove];

    switch (move) {
      // Si es * se duplica el paso
      case "*":
        if (beforeMove == "R" || beforeMove == "L") robot[0] += nextStep * 2;
        else robot[1] += nextStep * 2;
        afterMove += beforeMove;
        i++;
        break;
      case "!":
        // Si es ! se invierte el paso
        if (beforeMove == "R" || beforeMove == "L") {
          afterMove += beforeMove == "R" ? "L" : "R";
          robot[0] += -nextStep;
        } else {
          afterMove += beforeMove == "U" ? "D" : "U";
          robot[1] += -nextStep;
        }
        i++;
        break;
      case "?":
        // Si es ? vemos si ya se ha movido en esa dirección
        if (!afterMove.includes(beforeMove)) {
          if (beforeMove == "R" || beforeMove == "L") robot[0] += nextStep;
          else robot[1] += nextStep;
        }
        i++;
        break;
      default:
        // Si no se actualiza la posición
        if (move == "R" || move == "L") robot[0] += step;
        else robot[1] += step;
    }
  }
  return robot[0] == 0 && robot[1] == 0 ? true : robot;
}

/*
Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
*/
console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2,0]
console.log(isRobotBack("U!D")); // [0,2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0,1]
console.log(isRobotBack("*U?U")); // [0,2]
console.log(isRobotBack("U?D?U")); // true

// Ejemplos paso a paso:
console.log(isRobotBack("R!U?U")); // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack("UU!U?D")); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

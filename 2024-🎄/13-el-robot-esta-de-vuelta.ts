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

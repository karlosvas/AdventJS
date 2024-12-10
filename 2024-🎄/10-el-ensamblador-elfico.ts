function compile(instructions: string[]): number {
  let obj = {};
  let first = true;

  for (let i = 0; i < instructions.length; i++) {
    let line = instructions[i].split(" ");

    switch (line[0]) {
      case "MOV":
        let reg = line[1];
        let letter = line[2];

        if (!(letter in obj)) obj[letter] = 0;

        if (isNaN(parseInt(reg, 10))) obj[letter] = obj[reg];
        else obj[letter] = parseInt(reg, 10);
        break;
      case "INC":
        let letterMove = line[1];

        if (!(letterMove in obj)) obj[letterMove] = 0;
        obj[letterMove]++;
        break;
      case "DEC":
        let letterMove2 = line[1];

        if (!(letterMove2 in obj)) obj[letterMove2] = 0;
        obj[letterMove2]--;
        break;
      case "JMP":
        let instruction = line[1];
        let indice = line[2];

        if (!(instruction in obj)) obj[instruction] = 0;

        if (obj[instruction] == "0" && first) {
          i = parseInt(indice, 10);
          i--;
          first = false;
        }
        break;
    }
  }
  return obj["A"];
}

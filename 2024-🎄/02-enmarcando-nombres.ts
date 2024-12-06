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

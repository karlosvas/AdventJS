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

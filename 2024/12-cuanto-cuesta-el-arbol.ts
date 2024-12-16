function calculatePrice(ornaments: string) {
  const values: Record<string, number> = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let total = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const current = values[ornaments[i]];
    const next = values[ornaments[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total > 0 ? total : undefined;
}

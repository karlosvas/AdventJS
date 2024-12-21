function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  let extra: Record<string, number> = {};
  let missing: Record<string, number> = {};

  for (let gift of received) {
    if (!extra[gift]) extra[gift] = 1;
    else extra[gift]++;
  }

  for (let gift of expected) {
    if (!extra[gift]) {
      missing[gift] ? missing[gift]++ : (missing[gift] = 1);
    } else {
      extra[gift]--;
      if (extra[gift] == 0) delete extra[gift];
    }
  }

  return {
    missing,
    extra,
  };
}

function manufacture(gifts, materials) {
  let validateGift = [];
  for (let gift of gifts) {
    let make = true;
    for (let i = 0; i < gift.length; ++i) {
      if (!materials.includes(gift[i])) {
        make = false;
      }
    }
    if (make) validateGift.push(gift)
  }
  return validateGift;
}

manufacture(['tren', 'oso', 'pelota'], 'tronesa')
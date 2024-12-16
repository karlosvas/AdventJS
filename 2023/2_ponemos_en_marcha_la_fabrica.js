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

let gift, materials;
gifts = ['tren', 'oso', 'pelota']
materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

manufacture(gifts, materials) // []

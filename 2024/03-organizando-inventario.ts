type Inventory = Array<{ name: string; quantity: number; category: string }>;
type InventoryShorted = {
  [category: string]: { [name: string]: number };
};

function organizeInventory(inventory: Inventory): InventoryShorted {
  let inventoryShorted: InventoryShorted = {};

  for (let gift of inventory) {
    if (inventoryShorted.hasOwnProperty(gift.category)) {
      if (inventoryShorted[gift.category].hasOwnProperty(gift.name)) {
        inventoryShorted[gift.category][gift.name] += gift.quantity;
      } else {
        inventoryShorted[gift.category][gift.name] = gift.quantity;
      }
    } else {
      inventoryShorted[gift.category] = { [gift.name]: gift.quantity };
    }
  }

  return inventoryShorted;
}

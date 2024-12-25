interface TreeNode {
  value: string;
  left?: TreeNode;
  right?: TreeNode;
}

function isTreesSynchronized(tree1: TreeNode, tree2: TreeNode): [boolean, string] {
  function isMirror(tree1: TreeNode | undefined, tree2: TreeNode | undefined): boolean {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    return tree1.value === tree2.value && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
  }
  const synchronized = isMirror(tree1, tree2);
  return [synchronized, tree1.value];
}

/*
En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

Dos árboles binarios son espejos si:

    Las raíces de ambos árboles tienen el mismo valor.
    Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.

Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):
*/
const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}

/*
Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.
*/
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })); // [false, '🎅']

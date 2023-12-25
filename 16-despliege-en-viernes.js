function transformTree(tree) {
    function buildTree(index) {
        if (index >= tree.length || tree[index] == null) return null;

        const node = { value: tree[index], left: null, right: null };
        node.left = buildTree(2 * index + 1);
        node.right = buildTree(2 * index + 2);

        return node;
    }

    let solution = buildTree(0)
    return solution;
}

// console.log(transformTree([3, 1, 0, 8, 12, null, 1]))
// console.log(transformTree([1, 2, 3]))
console.log(transformTree([1, 2, 3, 4, 5]))
function treeHeight(tree: { value: string; left: any; right: any } | null): number {
  if (!tree) return 0;
  let leftHeight = treeHeight(tree.left);
  let rightHeight = treeHeight(tree.right);
  return 1 + Math.max(leftHeight, rightHeight);
}

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

transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])
/*
Expected:
{
  "value": 2,
  "left": {
    "value": 7,
    "left": null,
    "right": {
      "value": 6,
      "left": {
        "value": 1,
        "left": null,
        "right": null
      },
      "right": {
        "value": 11,
        "left": null,
        "right": null
      }
    }
  },
  "right": {
    "value": 5,
    "left": null,
    "right": {
      "value": 9,
      "left": null,
      "right": {
        "value": 10,
        "left": null,
        "right": null
      }
    }
  }
}

Actual:
{
  "value": 2,
  "left": {
    "value": 7,
    "left": null,
    "right": {
      "value": 6,
      "left": {
        "value": 1,
        "left": null,
        "right": null
      },
      "right": {
        "value": 11,
        "left": null,
        "right": null
      }
    }
  },
  "right": {
    "value": 5,
    "left": null,
    "right": {
      "value": 9,
      "left": null,
      "right": {
        "value": 10,
        "left": null,
        "right": null
      }
    }
  }
}
*/
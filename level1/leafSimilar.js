
var leafSimilar = function (root1, root2) {
  console.log(root1)
  console.log(root2)

};

const root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]
const root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]

leafSimilar(root1, root2)


class TreeNode {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  leafSimilar(root1, root2) {
    const s1 = this.getSequence(root1);
    const s2 = this.getSequence(root2);
    if (s1.length !== s2.length) {
      return false;
    }
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        return false;
      }
    }
    return true;
  }

  getSequence(root) {
    const result = [];
    this.dfs(root, result);
    return result;
  }

  dfs(root, result) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      result.push(root.val);
      return;
    }
    this.dfs(root.left, result);
    this.dfs(root.right, result);
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const stack = [root];
//   const result = [];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);
//     if (current.left) stack.push(current.left);

//     if (current.right) stack.push(current.right);
//   }
//   return result;
// };

// const val = depthFirstValues(a);

// console.log(val);

const depthFirstValues = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  const result = [root.val, ...leftValues, ...rightValues];
  console.log(result);
  return result;
};
depthFirstValues(a);

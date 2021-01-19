const Tree = require("./Tree");

function main() {
  const numArray1 = [3, 1, 4, 6, 9, 2, 5, 7];
  const bst1 = makeTree(numArray1);
  const bst2 = makeTree([5, 4, 7]);
  const bst3 = makeTree([5, 4, 7, 3, 4.5, 4.75]);

  // bst.right.right.right.right = new Tree(13.5)
  // nthLargest(bst);
//   console.log(isBalanced(bst3));
  console.log(sameBSTs([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 4, 2, 6, 0]));
}

const makeTree = (numArray) => {
  let bst = new Tree();
  for (let num of numArray) {
    bst.insert(num);
  }
  return bst;
};

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

const findHeight = (tree) => {
  if (!tree) return 0;
  if (!tree.left && !tree.right) return 1;
  const leftHeight = 1 + findHeight(tree.left);
  const rightHeight = 1 + findHeight(tree.right);
  return Math.max(leftHeight, rightHeight);
};

const isBST = (tree) => {
  if (!tree) return true;
  if (tree.left && tree.left.key > tree.key) return false;
  if (tree.right && tree.right.key < tree.key) return false;
  return isBST(tree.left) && isBST(tree.right);
};

// const nthLargest = (tree, position = 3) => {
//     if (tree.right) nthLargest(tree.right);
//     position--;
//     if (tree.left) nthLargest(tree.left, position - 1);
// }

// const nthLargestHelper = (tree, position = 3) => {
//     let oPos = new Number(position);
//     return nthLargest(tree, oPos);
// }

const isBalanced = (tree) => {
  if (!tree) return true;
  const diff = Math.abs(findHeight(tree.left) - findHeight(tree.right));
  if (diff === 0 || diff === 1)
    return isBalanced(tree.left) && isBalanced(tree.right);
  return false;
};

const sameBSTs = (tree1, tree2) => {
  if (
    tree1.length === tree2.length &&
    tree1.length <= 3 &&
    tree1[0] === tree2[0] && 
    tree1.includes(tree2[1]) && 
    tree2.includes(tree2[2])
  )
    return true;
  if (tree1[0] !== tree2[0] || tree1.length !== tree2.length) return false;
  const left1 = [];
  const left2 = [];
  const right1 = [];
  const right2 = [];
  for (let i = 1; i < tree1.length; i++) {
    if (tree1[i] < tree1[0]) left1.push(tree1[i]);
    else right1.push(tree1[i]);
    if (tree2[i] < tree2[0]) left2.push(tree2[i]);
    else right2.push(tree2[i]);
  }
  return sameBSTs(left1, left2) && sameBSTs(right1, right2);
};

main();

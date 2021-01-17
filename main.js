const Tree = require('./Tree')

function main(){
    const bst = new Tree();
    const numArray = [3,1,4,6,9,2,5,7];
    for (let num of numArray){
        bst.insert(num)
    }
    console.log(findHeight(bst))
}

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

const findHeight = (tree) => {
    if (!tree) return 0;
    if (!tree.left && !tree.right) return 1;
    const leftHeight = 1 + findHeight(tree.left);
    const rightHeight = 1 + findHeight(tree.right);
    return Math.max(leftHeight, rightHeight);
}


main();


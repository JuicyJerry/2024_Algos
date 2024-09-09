/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let res = [];
    let postOrder = (cur) => {
        if (!cur) return '';
        let leftSubTree = postOrder(cur.left);
        let rightSubTree = postOrder(cur.right);
        let structure = `${cur.val}_${leftSubTree}_${rightSubTree}`;
        console.log('structure ---> ', structure);
        map.set(structure, (map.get(structure) || 0) + 1);
        console.log('map ---> ', map);

        if (map.get(structure) === 2) res.push(cur);
        return structure;
    }

    console.log('res ---> ', res);
    postOrder(root);
    console.log('res ---> ', res);

    return res;
};
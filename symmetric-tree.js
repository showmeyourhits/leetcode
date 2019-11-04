/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var symmetricTree = function(root) {
    if (!root || !root.left && !root.right) {
        return true;
    }
    
    const leftStack = [root.left];
    let left;
    const rightStack = [root.right];
    let right;
    
    while (leftStack.length || rightStack.length) {
        left = leftStack.pop();
        right = rightStack.pop();

        if (left && right) {
            if (left.val !== right.val) {
                return false;   
            }
            leftStack.push(left.left);
            leftStack.push(left.right);
            
            rightStack.push(right.right);
            rightStack.push(right.left);
        } else if (left !== right) {
            return false;
        }
    }

    return true;
};

module.exports = symmetricTree;

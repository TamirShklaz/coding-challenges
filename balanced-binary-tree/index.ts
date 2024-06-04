class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


const isBalanced = (root: TreeNode | null) => {
    return dfs(root)[0]
}

const dfs = (root: TreeNode): [boolean, number] => {
    if (!root) {
        return [true, 0]
    }

    const left = dfs(root.left)
    const right = dfs(root.right)
    const height = Math.max(left[1], right[1]) + 1

    const balance = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1)
    return [balance, height]
}

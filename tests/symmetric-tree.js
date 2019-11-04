const symmetricTree = require('../symmetric-tree');

const tree = {
    val: 1,
    right: {
        val: 3,
        left: null,
        right: null,
    },
    left: {
        val: 2,
        left: null,
        right: null,
    }
}

describe('symmetric-tree', () => {
    const cases = [
        {
            tree: {
                flat: [1,2,2],
                val: 1,
                right: {
                    val: 2,
                    left: null,
                    right: null,
                },
                left: {
                    val: 2,
                    left: null,
                    right: null,
                }
            },
            result: true,
        },
        {
            tree: {
                flat: [1,2,3],
                val: 1,
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
                left: {
                    val: 2,
                    left: null,
                    right: null,
                }
            },
            result: false
        }
    ];

    cases.forEach(({result, tree}) => {
        it(`tree: [${tree.flat}]`, () => {
            expect(symmetricTree(tree)).toEqual(result)
        })
    })
});

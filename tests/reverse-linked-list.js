const reverseLinkedList = require('../problems/reverse-linked-list');
const {createLinkedList} = require('../problems/utils');

describe('reverse-linked-list', () => {
    const cases = [
        {
            head: createLinkedList([1,2,3]),
            result: createLinkedList([3,2,1]),
            desc: `[1,2,3]`
        },
        {
            head: createLinkedList([1,2]),
            result: createLinkedList([2,1]),
            desc:  `[1,2]`
        },
        {
            head: createLinkedList([1]),
            result: createLinkedList([1]),
            desc:  `[1]`
        },
        {
            head: createLinkedList([]),
            result: createLinkedList([]),
            desc:  `[]`
        },
    ];

    cases.forEach(({result, head, desc}) => {
        it(desc, () => {
            expect(reverseLinkedList(head)).toEqual(result)
        })
    })
});

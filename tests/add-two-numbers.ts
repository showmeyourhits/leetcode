import { addTwoNumbers, ListNode } from '../problems/add-two-numbers';

type CaseParameters = {
    param: {
        l1: number[],
        l2: number[],
    };
    result: number[],
}

describe('add-two-numbers', () => {
    const cases: CaseParameters[] = [
        {
            param: {
                l1: [2,4,3],
                l2: [5,6,4],
            },
            result: [7,0,8],
        },
        {
            param: {
                l1: [9,9,9,9,9,9,9],
                l2: [9,9,9,9],
            },
            result:  [8,9,9,9,0,0,0,1],
        },
    ];

    cases.forEach(({result, param: {l1, l2}}) => {
        it(`${l1} + ${l2} -> ${result}`, () => {
            const ll1 = arrToListNode(l1);
            const ll2 = arrToListNode(l2);
            const res = listNodeToArr(addTwoNumbers(ll1, ll2))

            expect(res).toEqual(result)
        })
    })
});

function arrToListNode(arr: number[]): ListNode {
    const newListNode: ListNode = {
        val: Infinity,
        next: null,
    };
    let current = newListNode;

    for (let i = 0; i < arr.length; i++) {
        current.val = arr[i];
        current.next = i + 1 == arr.length ? null : {
            val: Infinity,
            next: null
        }
        current = current.next;
    }
    return newListNode;
}

function listNodeToArr(listNode: ListNode | null): number[] {
    if (!listNode) return [];

    const res: number[] = [];

    while (listNode) {
        res.push(listNode.val);

        listNode = listNode.next;
    }


    return res;
}

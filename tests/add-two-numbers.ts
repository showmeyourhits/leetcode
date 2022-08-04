import { addTwoNumbers } from '../problems/add-two-numbers';
import { arrToListNode, listNodeToArr } from '../src/listUtils';

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


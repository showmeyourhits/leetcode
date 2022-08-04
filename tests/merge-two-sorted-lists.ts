import { mergeTwoSortedLists } from '../problems/merge-two-sorted-lists';
import { arrToListNode, listNodeToArr } from '../src/listUtils';

type CaseParameters = {
    param: {
        l1: number[],
        l2: number[],
    };
    result: number[];
}

describe('merge-two-sorted-lists', () => {
    const cases: CaseParameters[] = [
        {
            param: {
                l1: [1,2,3],
                l2: [1,3,5],
            },
            result: [1,1,2,3,3,5],
        },
        {
            param: {
                l1: [],
                l2: [],
            },
            result: [],
        },
        {
            param: {
                l1: [],
                l2: [1],
            },
            result: [1],
        },
        {
            param: {
                l1: [0,9],
                l2: [1],
            },
            result: [0,1,9],
        },
    ];

    cases.forEach(({result, param}) => {
        it(`${JSON.stringify(param)} -> ${result}`, () => {
            const {l1,l2} = param;

            const calculatedRes = mergeTwoSortedLists(arrToListNode(l1), arrToListNode(l2));

            expect(listNodeToArr(calculatedRes)).toEqual(result)
        })
    })
});

import { searchInsert, Param, Result } from '../problems/search-insert-position';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('search-insert-position', () => {
    const cases: CaseParameters[] = [
        {
            param: {
                nums: [1,3,5,6],
                target: 2
            },
            result: 1,
        },
        {
            param: {
                nums: [1,3,5,6],
                target: 5
            },
            result: 2,
        },
        {
            param: {
                nums: [1,3,5,6],
                target: 1
            },
            result: 0,
        },
        {
            param: {
                nums: [1,3,5,6],
                target: 10
            },
            result: 4,
        },
    ];

    cases.forEach(({result, param: {target, nums}}) => {
        it(`${target} @ ${nums} -> ${result}`, () => {
            expect(searchInsert(nums, target)).toEqual(result)
        })
    })
});

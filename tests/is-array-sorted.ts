import { isArraySorted, Param, Result } from '../problems/is-array-sorted';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('is-array-sorted', () => {
    const cases: CaseParameters[] = [
        {
            param: [1, 10 , -10, -20, 0, 2],
            result: false,
        },
        {
            param: [10, 9, 8, 7, 6, 5],
            result: true,
        },
        {
            param: [1, 2, 3, 4, 5, 6],
            result: true,
        },
        {
            param: [1],
            result: true,
        },
    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(isArraySorted(param)).toEqual(result)
        })
    })
});

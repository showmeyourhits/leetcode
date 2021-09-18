import { sameLengthSegment, Param, Result } from '../problems/same-length-segment';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('same-length-segment', () => {
    const cases: CaseParameters[] = [
        {
            param: [2, 1, 3, 2],
            result: [1, 2, 2, 1],
        },
        {
            param: [1, 2, 3, 4],
            result: [1, 1, 1, 1],
        },
        {
            param: [1],
            result: [1],
        },
        {
            param: [1,1,1,1],
            result: [4,4,4,4],
        },
        {
            param: [2,2,1,1],
            result: [2,2,2,2],
        }
    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(sameLengthSegment(param)).toEqual(result)
        })
    })
});

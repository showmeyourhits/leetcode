import { partitionLabels, Param, Result } from '../problems/partition-labels';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('partition-labels', () => {
    const cases: CaseParameters[] = [
        {
            param: "ababcbacadefegdehijhklij",
            result: [9,7,8],
        },
    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(partitionLabels(param)).toEqual(result)
        })
    })
});

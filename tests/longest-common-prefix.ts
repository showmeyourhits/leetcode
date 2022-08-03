import { longestCommonPrefix, Param, Result } from '../problems/longest-common-prefix';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('longest-common-prefix', () => {
    const cases: CaseParameters[] = [
        {
            param: ["flower","flow","flight"],
            result: 'fl',
        },
        
        {
            param: ["ass","ass","ass"],
            result: 'ass',
        },
        
        {
            param: ["dog","racecar","car"],
            result: '',
        },

    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(longestCommonPrefix(param)).toEqual(result)
        })
    })
});

import { longestSubstringWithoutRepeatingCharacters, Param, Result } from '../problems/longest-substring-without-repeating-characters';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('longest-substring-without-repeating-characters', () => {
    const cases: CaseParameters[] = [
        {
            param: 'abcabcbb',
            result: 'abc'.length,
        },
        {
            param: 'abcadcbb',
            result: 'bcad'.length,
        },
        {
            param: 'pwwkew',
            result: 'wke'.length,
        },
        {
            param: 'bbbbb',
            result: 'b'.length,
        },
    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(longestSubstringWithoutRepeatingCharacters(param)).toEqual(result)
        })
    })
});

import { romanToInteger, Param, Result } from '../problems/roman-to-integer';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('roman-to-integer', () => {
    const cases: CaseParameters[] = [
        {
            param: 'III',
            result: 3,
        },
        {
            param: 'LVIII',
            result: 58,
        },
        {
            param: 'MCMXCIV',
            result: 1994,
        },
    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(romanToInteger(param)).toEqual(result)
        })
    })
});

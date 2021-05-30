import { <%= funcName %>, Param, Result } from '../problems/<%= caseName %>';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('<%= caseName %>', () => {
    const cases: CaseParameters[] = [
        {
            param: [],
            result: '',
        },
    ];

    cases.forEach(({result, param}) => {
        it(`${param} -> ${result}`, () => {
            expect(<%= funcName %>(param)).toEqual(result)
        })
    })
});

const <%= funcName %> = require('../problems/<%= caseName %>');

describe('<%= caseName %>', () => {
    const cases = [
        {
            nums: [],
            result: '',
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(<%= funcName %>(nums)).toEqual(result)
        })
    })
});

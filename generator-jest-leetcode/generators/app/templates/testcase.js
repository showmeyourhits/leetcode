const <%= funcName %> = require('../<%= caseName %>');

describe('<%= caseName %>', () => {
    const cases = [
        {
            nums: [],
            result: '',
        },
    ];

    cases.forEach(({result}) => {
        it(`${nums} -> ${result}`, () => {
            expect(<%= funcName %>(nums)).toEqual(result)
        })
    })
});

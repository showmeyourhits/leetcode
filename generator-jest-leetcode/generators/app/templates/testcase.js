const <%= funcName %> = require('../<%= caseName %>');

describe('<%= caseName %>', () => {
    const cases = [
        {
            result: '',
        },
    ];

    cases.forEach(({result}) => {
        it(``, () => {
            expect(<%= funcName %>()).toEqual(result)
        })
    })
});

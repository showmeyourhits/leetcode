const least = require('../least-interval');

describe('least-interval', () => {
    const cases = [
        {
            tasks: ["A","A","A","B","B","B"],
            n: 2,
            result: 8,
        },
    ];

    cases.forEach(({tasks, n, result}) => {
        it(`tasks: [${tasks}], n: ${n}`, () => {
            expect(least(tasks, n)).toEqual(result)
        })
    })
});

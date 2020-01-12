const countingBits = require('../problems/counting-bits');

describe('counting-bits', () => {
    const cases = [
        {
            nums: 2,
            result: [0, 1, 1],
        },
        {
            nums: 0,
            result: [0],
        },
        {
            nums: 5,
            result: [0, 1, 1, 2, 1, 2],
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(countingBits(nums)).toEqual(result)
        })
    })
});

const majorityElement = require('../problems/majority-element');

describe('majority-element', () => {
    const cases = [
        {
            nums: [3,2,3],
            result: 3,
        },
        {
            nums: [2,2,1,1,2,2],
            result: 2,
        },
        {
            nums: [1,2,1,1,2,2,2],
            result: 2,
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`[${nums}] -> ${result}`, () => {
            expect(majorityElement(nums)).toEqual(result)
        })
    })
});

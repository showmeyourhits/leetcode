const climbingStairs = require('../problems/climbing-stairs');

describe('climbing-stairs', () => {
    const cases = [
        {
            nums: 2,
            result: 2,
        },
        {
            nums: 3,
            result: 3,
        },
        {
            nums: 4,
            result: 5,
        },
        {
            nums: 5,
            result: 8,
        },
        {
            nums: 15,
            result: 987,
        },
        {
            nums: 45,
            result: 1836311903,
        },
    ];

    cases.forEach(({result, nums}) => {
        it(`${nums} -> ${result}`, () => {
            expect(climbingStairs(nums)).toEqual(result)
        })
    })
});
